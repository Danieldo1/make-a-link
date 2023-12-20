
import { Views } from '@/models/Views'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Page } from '@/models/Page'
import Chart from '@/components/Chart'
import SectionBox from '../../../components/applayout/SectionBox';





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



  return (
    <div>
      <SectionBox>
        <h2 className='text-2xl font-bold mb-4 text-center'>Views</h2>
       <Chart  data = {groupedViews.map(o => ({'date': o._id, 'views': o.count}))} />
       <h2 className='text-2xl font-bold mb-4 text-center mt-12'>Clicks</h2>

      </SectionBox>
    </div>
  )
}

export default AnalyticsPage