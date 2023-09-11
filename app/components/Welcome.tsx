import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <div className=' flex justify-center border flex-col shadow-md px-64 py-52 mb-5'>
        <div className='flex flex-col text-center justify-center'>
            <div className="grid gap-1 lg:font-lg md:text-sm sm:text-xs justify-center text-center">
              <div className='lg:font-5xl md:text-3xl sm:text-xl  mb-5'>Welcome to JTools Company</div>
            <span className=' '>บริษัท เจ ทูลส์ เทคโนโลยี จำกัด (JTools) เป็นผู้นำด้านวิศวกรรม ให้บริการออกแบบและผลิตเครื่องจักร ชิ้นส่วนแม่นยำ อุปกรณ์ Jig & Fixture และเครื่องมือพิเศษ </span>
            <span className=''>รวมถึงระบบอัตโนมัติ ท่ามกลางประสบการณ์แบ่งปันในอุตสาหกรรมหลากหลาย </span>
              <span className=' '>เช่น การผลิตเหล็ก กระดาษ ปูนซีเมนต์ พลังงาน และปิโตรเคมี สู่ภาครัฐและรัฐวิสหากิจต่างๆ </span>
              <span className=''>ที่ JTools เราพร้อมสร้างความเยี่ยมยอดด้วยวิศวกรรมและนวัตกรรมในทุกโครงการ.</span>
              </div>
        </div>
</div>

  )
}