import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <div className=' flex justify-center border flex-col shadow-md px-64 py-52 mb-5'>
        <div className='flex flex-col text-center justify-center'>
            <div className="grid gap-1 lg:font-lg md:text-sm sm:text-xs justify-center text-center">
              <div className='lg:font-5xl md:text-3xl sm:text-xl  mb-5'>Welcome to JTools Company</div>
            <p className='lg:font-sm md:text-sm sm:text-sm'>บริษัท เจ ทูลส์ เทคโนโลยี จำกัด (JTools) เป็นผู้นำด้านวิศวกรรม ให้บริการออกแบบและผลิตเครื่องจักร ชิ้นส่วนแม่นยำ อุปกรณ์ Jig & Fixture และเครื่องมือพิเศษ </p>
            <p className='lg:font-sm md:text-sm sm:text-sm'>รวมถึงระบบอัตโนมัติ ท่ามกลางประสบการณ์แบ่งปันในอุตสาหกรรมหลากหลาย </p>
              <p className='lg:font-sm md:text-sm sm:text-sm '>เช่น การผลิตเหล็ก กระดาษ ปูนซีเมนต์ พลังงาน และปิโตรเคมี สู่ภาครัฐและรัฐวิสหากิจต่างๆ </p>
              </div>
        </div>
</div>

  )
}