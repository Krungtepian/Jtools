import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <section className='bg-slate-300 items-center flex flex-col py-[5vh] min-h-fit'>
      <div className="text-center  container mx-auto px-11">
          <h1 className="leading-tight text-3xl max-w-5xl mx-auto tracking-tight">
                Jtools Technology
          </h1>
          <h2 className="text-2xl mt-1">
              บริษัท เจ ทูลส์ เทคโนโลยี จำกัด
          </h2>
          <div className="justify-center mt-5">
          <p className='text-xl'>เราเป็นผู้นำเรื่อง การออกแบบงานออโตเมชั่น Automation เครื่องจักรที่ลดเวลาการผลิตเพื่อเพิ่มปริมาณงานและรักษาคุณงานให้ได้ตามมาตราฐาน โดยการใช้เทคโนโลยีที่เหมาสมและควบคุมได้ง่าย
        เราเชี่ยวชาญในการผลิตและออกแบบเครื่องจักรอัตโนมัติ เครื่องมือพิเศษในขบวนการผลิตของลูกค้า
        ด้วยการใช้ ซอพแวร์ชั้นนำที่น่าเชื่อถือ ถูกต้อง มีลิขสิทธิ รวมไปถึงให้บริการผลิตภัณฑ์เครื่องจักรตามความต้องการของลูกค้า รับผลิตงานตามแบบงานและรับผลิตที่มีความละเอียดสูง</p>
      </div>
      </div>
    </section>
  )
}