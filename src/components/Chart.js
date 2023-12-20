'use client'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer} from 'recharts';
import { addDays, differenceInDays, formatISO9075, parseISO } from 'date-fns'

const Chart = ({data}) => {
 const xAxis = Object.keys(data[0]).find(key => key !== 'date')

 const viewsNoGaps=[]
 data.forEach((value,index)=> {
const date = value.date
viewsNoGaps.push({
    date,
    [xAxis]:value?.[xAxis] || 0
})
const nextDate = data?.[index+1]?.date
  if(date && nextDate){
    const daysBetween = differenceInDays(parseISO(nextDate),parseISO(date))
    if(daysBetween >0){
      for(let i=1;i<daysBetween;i++){
        const daysBet = formatISO9075(addDays(parseISO(date),i)).split(' ')[0]
        viewsNoGaps.push({date:daysBet,[xAxis]:0})
      }
    }
  }
})
  return (
    <div className=''>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart width={730} height={250} data={viewsNoGaps}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} strokeWidth='2' stroke='#f5f5f5' />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin='10' tick={{fill: '#aaa'}} />
                <YAxis axisLine={false} tickLine={false} tickMargin='10' tick={{fill: '#aaa'}} />
                <Tooltip />
                <Line type="monotone" dataKey={xAxis} stroke="#7A5BC7" dot={false} strokeWidth='4' />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart