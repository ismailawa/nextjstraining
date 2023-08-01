import React, { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';
import { motion, useAnimation, useInView } from 'framer-motion';

function CoursesSection() {
  const item = useRef(null);
  const isInView = useInView(item);

  const control = useAnimation();

  const boxVariant = {
    visible: { x: 0, y: 0, opacity: 1, scale: 1 },
    hidden: { x: '-100%', y: '100%', opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (isInView) {
      control.start('visible');
    }
  }, [control, isInView]);

  const categories = [1, 2, 3, 4, 5, 6];
  return (
    <div className=' flex flex-col p-24 w-full gap-4 bg-green-50' ref={item}>
      <h1 className=' text-4xl font-semibold'>Popular courses for you</h1>
      <div className='flex w-full justify-between items-center '>
        <h1 className=' text-lg opacity-50'>
          Browse top classes by browsing category which will be more easy for
          you
        </h1>
        <div className=' px-3 py-3 rounded-lg cursor-pointer font-semibold text-green-500 bg-white shadow-xl'>
          All Courses
        </div>
      </div>
      <div className='grid grid-cols-3 gap-12 mt-10'>
        {categories.map((c, index) => (
          <motion.div
            key={index}
            variants={boxVariant}
            initial='hidden'
            animate={control}
            transition={{
              type: 'spring',
              delay: index * 0.3,
              duration: 2,
              bounce: 0.1,
            }}
          >
            <CourseCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;
