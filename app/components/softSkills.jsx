import React from "react";
import SkillsContainer from "./skillsContainer";

function SoftSkills() {
  return (
    <SkillsContainer>
      <h3 className='text-xl text-center font-semibold bg-textColor text-backgroundColor w-fit rounded-full px-6 py-1'>
        Soft skills
      </h3>
      <ul className='mt-10 flex flex-col justify-start items-start gap-4'>
        <li>Communication</li>
        <li>Problem-solving</li>
        <li>Time management</li>
        <li>Teamwork</li>
        <li>Creativity</li>
        <li>Quick learner</li>
      </ul>
    </SkillsContainer>
  );
}

export default SoftSkills;
