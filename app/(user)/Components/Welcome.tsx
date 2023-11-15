import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <section className='flex flex-col w-full h-[50vh] justify-center gap-3 bg-slate-200'>
      <header className='px-[25vh] pb-[2vh]'>
        <h1 className='text-4xl font-medium mb-4 ml-[2vw]'>JTools Technology</h1>
        <h1 className='text-2xl font-medium'>บริษัท เจ ทูลส์ เทคโนโลยี จำกัด</h1>        
      </header>
      <span className='ml-[8vw] px-[15vw] '>
        <p className='text-md'>เราเป็นผู้นำเรื่อง การออกแบบงานออโตเมชั่น Automation เครื่องจักรที่ลดเวลาการผลิตเพื่อเพิ่มปริมาณงานและรักษาคุณงานให้ได้ตามมาตราฐาน โดยการใช้เทคโนโลยีที่เหมาสมและควบคุมได้ง่าย
        เราเชี่ยวชาญในการผลิตและออกแบบเครื่องจักรอัตโนมัติ เครื่องมือพิเศษในขบวนการผลิตของลูกค้า
        ด้วยการใช้ ซอพแวร์ชั้นนำที่น่าเชื่อถือ ถูกต้อง มีลิขสิทธิ รวมไปถึงให้บริการผลิตภัณฑ์เครื่องจักรตามความต้องการของลูกค้า รับผลิตงานตามแบบงานและรับผลิตที่มีความละเอียดสูง</p> 
      </span>
    </section>

  )
}