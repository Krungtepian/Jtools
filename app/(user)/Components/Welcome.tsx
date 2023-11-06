import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <div className='flex justify-center shadow-md w-full'>
      <div className='flex flex-col text-center justify-center'>
          <div className="grid gap-1 lg:text-lg md:text-sm sm:text-xs justify-center text-center">
            <div className='lg:font-5xl md:text-3xl sm:text-xl  mb-5'>Welcome to JTools Company</div>
                      บริษัท เจ ทูลส์ เทคโนโลยี จำกัด
          เป็นผู้นำเรื่อง การออกแบบงานออโตเมชั่น Automation เครื่องจักรที่ลดเวลาการผลิต และเพิ่มปริมาณงาน และรักษาคุณงานให้ได้ตามมาตราฐาน โดยการใช้เทคโนโลยี ที่เหมาสมและควบคุมได้ง่าย
          เราเชี่ยวชาญในการผลิตและออกแบบเครื่องจักรอัตโนมัติ เครื่องมือพิเศษในขบวนการผลิตของลูกค้า
          ด้วยการใช้ ซอพแวร์ชั้นนำที่น่าเชื่อถือ ถูกต้อง มีลิขสิทธิ,ให้บริการผลิตภัณฑ์เครื่องจักรตามความต้องการของลูกค้า,รับผลิตงานตามแบบงานและรับผลิตที่มีความละเอียดสูง Precision
            </div>
          </div>
    </div>

  )
}