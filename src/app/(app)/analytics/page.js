
import { Views } from '@/models/Views'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Page } from '@/models/Page'
import Chart from '@/components/Chart'
import SectionBox from '../../../components/applayout/SectionBox';
import {Link as LinkIcon} from 'lucide-react'
import Link from 'next/link'
import { formatISO9075, isToday } from 'date-fns'



const AnalyticsPage = async () => {
  const session = await getServerSession(optionsAuth)
  if(!session){
    redirect('/login')
  }
  const page= await Page.findOne({owner:session.user.email})
  mongoose.connect(process.env.MONGODB_URL)
 const groupedViews =await Views.aggregate([
{  
  $match: {
    type: 'view',
    uri: page.username
  }
},
  {
    $group: {
      _id: {
        $dateToString: {
          date: "$createdAt",
          format: "%Y-%m-%d"
        },
      },
      count: {
        "$count": {},
      }
    },
  },
  {
    $sort: {_id: 1}
  }
])

const clicks = await Views.find({page:page.username,type:'click'})

  return (
    <div>
      <SectionBox>
        <h2 className='text-2xl font-bold mb-4 text-center mt-5'>Profile Views</h2>
       <Chart  data = {groupedViews.map(o => ({'date': o._id, 'views': o.count}))} />
      </SectionBox>

      <SectionBox >
      <div className='px-10'>

      <h2 className='text-2xl font-bold mb-4 text-center mt-5'>Link Clicks</h2>
        {page?.links.map(link => {
          return (
  <div key={link.url} className='shadow-md border rounded-lg my-4 bg-gray-100 py-4 px-4 md:flex block items-center md:items-stretch text-center md:text-left justify-center '>
              <div className='w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-5 my-auto'>
                <LinkIcon className='w-5 h-5' />
              </div>

              <div className='flex-1'>
              <h3 className='text-lg font-medium'>{link.title || 'No Title'}</h3>
                <p className='text-gray-500 text-sm '>{link.subtitle || 'No Subtitle'}</p>
                <Link target='_blank' href={link.url} className='text-blue-700 underline italic text-xs'>{link.url}</Link>
              </div>

                <div className='justify-between flex items-center text-center gap-10 mt-5 md:mt-0 '>
                  <div className=' text-center justify-between'>
                    <p className='text-gray-400 text-xs uppercase '>Today</p><span className='text-blue-500 text-lg'>{ clicks.filter(c => c.uri === link.url && isToday(c.createdAt)).length}</span>
                  </div>
                  <div className=' text-center justify-between '>
                  <p className='text-gray-400 text-xs uppercase'>Total</p><span className='text-blue-500 text-lg'>{clicks.filter(c => c.uri === link.url).length}</span>
                  </div> 
            </div>
</div>
          )
        })}
      </div>
      </SectionBox>
    </div>
  )
}

export default AnalyticsPage