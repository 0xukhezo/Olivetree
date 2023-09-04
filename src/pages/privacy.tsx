import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ConditionsPrivacyInfo from "@/components/Paragraphs/ConditionsPrivacyInfo";
import React from "react";

const privacyData = [
  {
    title: "Introduction",
    text: "Lorem ipsum dolor sit amet consectetur. Egestas libero suspendisse blandit mauris enim dui eu. Sit habitant bibendum vitae elementum. Fusce ridiculus accumsan vitae nunc tincidunt cursus in morbi tortor. Pharetra tellus fusce nunc nisl scelerisque eros pellentesque viverra. Pharetra blandit a velit convallis quis elit quam tincidunt condimentum. Vitae tristique neque metus cursus amet est amet.Viverra sed pharetra vitae sed nisl nunc dolor molestie. Egestas elit nisl ut condimentum vitae id justo. Eget odio leo amet sed non in velit cras purus. Sit lectus pulvinar ornare tempus. Cras laoreet lectus facilisis augue. Egestas tempor cras eu tortor euismod ultricies mattis est. Quis sit integer vestibulum dui nam nulla quis morbi. Elementum nec et feugiat amet blandit massa odio rhoncus amet. Id sit mollis dapibus vivamus fermentum egestas. Iaculis et sapien gravida eu sagittis. Et arcu sagittis vestibulum libero ultrices.Aliquam vel diam adipiscing aliquam. Hac convallis neque egestas consectetur. Nec volutpat facilisis felis est lacus. Morbi enim auctor donec vitae massa condimentum sed sagittis. Arcu nisi enim elementum tincidunt in habitasse nam magna. Ante id id posuere cursus viverra vulputate ut eleifend. Duis et quam sagittis gravida. Nascetur pharetra enim id amet turpis scelerisque scelerisque urna gravida",
  },
  {
    title: "Title",
    text: "Malesuada orci cras nunc integer id facilisis sociis etiam suspendisse. Mattis duis facilisis urna nulla in et eget pellentesque. Nam quis varius eu diam varius adipiscing vulputate. A amet sem et natoque. Commodo sit amet auctor ut aliquet sed condimentum in. Eu at laoreet pellentesque elit egestas.In nec diam tellus amet vel. disse nam quis lacus tincidunt.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <Navbar />
      <ConditionsPrivacyInfo
        title="Privacy"
        date="Last Updated on May 15, 2023"
        data={privacyData}
      />
      <Footer />
    </div>
  );
}
