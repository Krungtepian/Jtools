import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <div className=' flex justify-center border flex-col shadow-md px-64 py-52 mb-5'>
        <div className='flex flex-col text-center'>
            <h1 className='font-medium text-5xl  mb-5'>Welcome to JTools Company</h1>
            <p className='font-medium text-right '>บริษัท เจ ทูลส์ เทคโนโลยี จำกัด (JTools) เป็นผู้นำด้านวิศวกรรม ให้บริการออกแบบและผลิตเครื่องจักร ชิ้นส่วนแม่นยำ อุปกรณ์ Jig & Fixture และเครื่องมือพิเศษ รวมถึงระบบอัตโนมัติ ท่ามกลางประสบการณ์แบ่งปันในอุตสาหกรรมหลากหลาย เช่น การผลิตเหล็ก กระดาษ ปูนซีเมนต์ พลังงาน และปิโตรเคมี สู่ภาครัฐและรัฐวิสหากิจต่างๆ ที่ JTools เราพร้อมสร้างความเยี่ยมยอดด้วยวิศวกรรมและนวัตกรรมในทุกโครงการ.</p>
        </div>
</div>

  )
}