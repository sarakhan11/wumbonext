
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link";
import React from 'react';const wumbo = () => {
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Adamina&family=DM+Sans&family=Ibarra+Real+Nova&family=Manrope:wght@700&family=Merriweather:ital,wght@1,300&family=Playfair+Display&family=Poppins:wght@500&family=Work+Sans:wght@400;700&display=swap');
</style>

    return (
      <>

    <div className="bg-gradient-to-b from-[#E4EFFF] to-[rgba(228, 239, 255, 0.60)] h-screen" >
      <div className='xl:mx-28 lg:mx-4 md:mx-28 sm:mx-2 mx-4 py-20'>
        <div className='flex flex-row justify-between'>
          <Image className="cursor-pointer" src="/Frame 3433.png" width={134} height={50} alt=""/>
          <div className='hidden xl:block lg:block'>
          <ul className='mt-8 flex gap-x-8 '>
            <li className='font-normel hover:font-bold text-base text-[#193766] font-[DM+Sans&family]'>
              Top
            </li>
            <li className='font-normel hover:font-bold text-base text-[#193766] font-[DM+Sans&family]'>
              For Everyone
            </li>
            <li className='font-normel hover:font-bold text-base text-[#193766] font-[DM+Sans&family]'>
              Features
            </li>
            <li className='font-normel hover:font-bold text-base text-[#193766] font-[DM+Sans&family]'>
              Preview
            </li>
            <li className='font-normel hover:font-bold text-base text-[#193766] font-[DM+Sans&family]'>
              License
            </li>
          </ul>
          </div>
          <button className='font-normel hover:font-bold text-base text-[#193766] font-[DM+Sans&family] bg-[#ffffff] px-8 my-4 rounded-md'>
              Download
          </button>
        </div>




        
        <div className='mt-16 container mx-auto w-auto justify-between'>
          <div className='flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-16'>


            <div className='w-[283px] xl:w-[532px] lg:w-[400px] md:w-[500px] sm:w-[283px] mt-16'>
              <div className='leading-[74px]'>
                  <h1 className='text-[#193766] font-[DM+Sans&family] font-normal text-4xl xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl leading-[74px]'>
                    Beautiful Design For <span className='underline font-bold'>Social Media</span> Content
                  </h1>
              </div>

              <p className='mt-5 xl:w-[532px] lg:w-[532px] md:w-full sm:w-[283px] w-[283px] text-[#697B98] font-[DM+Sans&family] font-normal leading-[36px] w-auto text-xl '>
                Figma social media content templates for branding, marketing, insights, 
                and more. Free for personal and commercial use!
              </p>

              <div className='w-full flex flex-col xl:flex-row lg:flex-col md:flex-row sm:flex-col gap-4 pt-10'>
                <button className='w-[283px] xl:w-auto lg:w-auto md:w-auto sm:w-auto font-normel hover:font-bold text-base text-[#F4F7FF] font-[DM+Sans&family] gap-x-4 flex bg-[#3B82F6] px-8 py-4 rounded-md'>
                  <Image className="cursor-pointer" src="/download.png" width={24} height={24} alt=""/>
                  Download
                </button>
                <button className='w-[283px] xl:w-auto lg:w-auto md:w-auto sm:w-auto font-normel hover:font-bold text-base text-[#3B82F6] font-[DM+Sans&family] gap-x-4 flex bg-[#C6DBFF] px-8 py-4 rounded-md'>
                  <Image className="cursor-pointer" src="/play-circle.png" width={24} height={24} alt=""/>
                  See in Action
                </button>
              </div>

            </div>

            <div className=''>
            <Image className="cursor-pointer" src="/Group 1.png" width={583} height={582} alt=""/>
            </div>

          </div>
        </div>
        <div className='my-24 flex flex-col '>
            <p className='xl:w-[500px] lg:w-[500px] md:w-full sm:w-[300px] w-[283px] text-[#193766] font-[DM+Sans&family] text-center mx-auto font-medium leading-[44px] text-3xl '>
              Figma Social Feeds is designed for everyone. 
              Use for whatever you want, it’s completely free!
            </p>

            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 justify-between mt-24'>
              <div className='xl:p-14 lg:p-2 md:p-14 sm:p-4 p-4 bg-[#193766] rounded-xl '>
                <Image className="" src="/Frame 8.png" width={70} height={70} alt=""/>
                  <h1 className='mt-5 text-2xl text-left font-bold leading-[44px] font-[DM+Sans&family] text-white'>
                    For Designer
                  </h1>
                  <p className='mt-5 text-white w-[268px] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
                    Figma social media content templates for branding, marketing, insights, 
                    and more. Free for personal and commercial use!
                  </p>
              </div>

              <div className='xl:p-14 lg:p-2 md:p-14 sm:p-4 p-4 rounded-xl hover:bg-[#193766]'>
                <Image className="bg-[#193766]" src="/Frame 8.png" width={70} height={70} alt=""/>
                  <h1 className='mt-5 text-2xl hover:text-white text-left font-bold leading-[44px] font-[DM+Sans&family] text-[#193766] '>
                    For Designer
                  </h1>
                  <p className='mt-5 text-[#193766] hover:text-white w-[268px] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
                    Figma social media content templates for branding, marketing, insights, 
                    and more. Free for personal and commercial use!
                  </p>
              </div>

              <div className='xl:p-14 lg:p-2 md:p-14 sm:p-4 p-4 rounded-xl hover:bg-[#193766]'>
                <Image className="bg-[#193766]" src="/Frame 8.png" width={70} height={70} alt=""/>
                  <h1 className='mt-5 text-2xl hover:text-white text-left font-bold leading-[44px] font-[DM+Sans&family] text-[#193766]'>
                    For Designer
                  </h1>
                  <p className='mt-5 text-[#193766] hover:text-white w-[268px] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
                    Figma social media content templates for branding, marketing, insights, 
                    and more. Free for personal and commercial use!
                  </p>
              </div>
            </div>
          </div>

        <div className='flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:gap-20 lg:gap-4 md:gap-20 sm:gap-2'>
          <div className='my-24 flex flex-col w-[283px] xl:w-[573px] lg:w-[400px] md:w-[500px] sm:w-[283px]'>
            <p className='xl:w-[500px] lg:w-[500px] md:w-full sm:w-[300px] w-[283px] text-[#193766] font-[DM+Sans&family] text-left font-medium leading-[44px] text-3xl '>
              There are <span className='underline'>80+ Pre-Designed</span>  Templates Ready to Use
            </p>
            <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
              Figma social media content templates for branding, marketing, insights, 
              and more. Free for personal and commercial use!
            </p>
            <div className=''>
              <div className='flex gap-4'>
                <Image className="-mt-3" src="/Rectangle 623.svg" width={15} height={15} alt=""/>
                <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                  <span className='text-[#3B82F6]'>Insights:</span> create content that contains insights on design, coding, or recommendations for the best tourist attractions.
                </p>
              </div>
              <div className='flex gap-4'>
                <Image className="-mt-3" src="/Rectangle 623.svg" width={15} height={15} alt=""/>
                <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                  <span className='text-[#3B82F6]'>Promotions:</span> create content that contains insights on design, coding, or recommendations for the best tourist attractions.
                </p>
              </div>
              <div className='flex gap-4'>
                <Image className="-mt-3" src="/Rectangle 623.svg" width={15} height={15} alt=""/>
                <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                  <span className='text-[#3B82F6]'>Much More:</span> create content that contains insights on design, coding, or recommendations for the best tourist attractions.
                </p>
              </div>
            </div>
          </div>


          <div className=''>
            <div className='xl:items-end lg:items-end md:items-end sm:items-center items-center grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xl:gap-5 lg:gap-2 md:gap-5 sm:gap-5 gap-5 mt-0 xl:mt-0 lg:mt-20 md:mt-0 sm:mt-0'>
              <Image className="ml-auto" src="/ok.png" width={146} height={146} alt=""/>
              <Image className="" src="/Rectangle 610 f.png" width={227} height={227} alt=""/>
              <Image className="" src="/Rectangle 608.png" width={191} height={191} alt=""/>
            </div>
            <div className='items-center'>
              <Image className="mx-auto" src="/Rectangle 608 (1).png" width={343} height={344} alt=""/>
            </div>
          </div>
        </div>


        <div className='flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:gap-20 lg:gap-4 md:gap-20 sm:gap-2'>
          <div className='h-[591px] w-auto'>
              <Image className="" src="/Frame 8 (1).png" width={475} height={591} alt=""/>
          </div>


          <div className='my-24 flex flex-col w-[283px] xl:w-[573px] lg:w-[400px] md:w-[500px] sm:w-[283px]'>
            <p className='xl:w-[500px] lg:w-[500px] md:w-full sm:w-[300px] w-[283px] text-[#193766] font-[DM+Sans&family] text-left font-medium leading-[44px] text-3xl '>
              Design Templates Are Highly Customizable, <span className='underline'>it's easy to use!</span>
            </p>
            <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
              All design templates are ready to use, meaning you only need to focus on content or if necessary, adjust some properties such as color, 
              font, font size and other properties to match your brand.
            </p>
            <div className=''>
              <div className='flex gap-4'>
                <Image className="-mt-3" src="/Rectangle 623.svg" width={15} height={15} alt=""/>
                <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                  <span className='text-[#3B82F6]'>Font Family:</span> create content that contains insights on design, coding, or recommendations for the best tourist attractions.
                </p>
              </div>
              <div className='flex gap-4'>
                <Image className="-mt-3" src="/Rectangle 623.svg" width={15} height={15} alt=""/>
                <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                  <span className='text-[#3B82F6]'>Colors:</span> create content that contains insights on design, coding, or recommendations for the best tourist attractions.
                </p>
              </div>
              <div className='flex gap-4'>
                <Image className="-mt-3" src="/Rectangle 623.svg" width={15} height={15} alt=""/>
                <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                  <span className='text-[#3B82F6]'>Much More:</span> create content that contains insights on design, coding, or recommendations for the best tourist attractions.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className='container h-[1306px]'>
          <div className='w-auto'>
            <Image className="absolute xl:h-[1206px] lg:h-[1006px] md:h-[806px] sm:h-[800px] h-[600px]" src="/Rectangle 630.png" width={1440} height={1306} alt=""/>
            <div className='relative mx-auto align-center text-center justify-center items-center flex flex-col'>
              <button className='relative border justify-center xl:mt-48 lg:mt-20 md:mt-28 sm:mt-24 mt-14 items-center text-center mx-auto text-[#3B82F6] px-4 py-2 rounded-3xl font-bold font-[DM+Sans&family] text-base'>
                Preview
              </button>
              <p className='relative mt-2 xl:w-[777px] lg:w-[777px] md:w-full sm:w-[283px] w-[283px] md:w-full sm:w-[300px] w-[283px] text-white font-[DM+Sans&family] text-center mx-auto font-medium xl:leading-[44px] lg:leading-[44px] md:leading-[44px] sm:leading-[44px] leading-[18px] text-medium xl:text-3xl lg-text-3xl md:text-3xl sm:text-xl  '>
                Social Feeds is a Figma design template, and everyone can use Figma!
              </p>
              <Image className="inline-block mt-2 xl:mt-14 lg:mt-14 md:mt-14 sm:mt-4 md:w-[528px] xl:w-[928px] lg:w-[828px] sm:w-auto w-auto" src="/Rectangle 625.png" width={928} height={539} alt=""/>
              <p className='mt-10 text-white hover:text-white xl:w-[777px] lg:w-[777px] md:w-full sm:w-[283px] w-[283px] md:w-full sm:w-[300px] w-[283px] text-center font-[DM+Sans&family] font-medium leading-[30px] w-auto text-base '>
                Figma social media content templates for branding, marketing, insights, 
                and more. Free for personal and commercial use!
              </p>
            <div>
          </div>
        </div>
      </div>



      <div className='xl:mt-80 lg:mt-80 md:mt-20 sm:mt-80 mt-10 mb-20 xl:mx-28 lg:mx-20 md:mx-auto ml-0 xl:ml-0 lg:ml-0 md:ml-36 sm:ml-0 sm:mx-2 mx-4 flex justify-between container'>
        <div className=''>
          <div className=' justify-between flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:gap-20 lg:gap-20 md:gap-20 sm:gap-2'>
            <div className='my-24 flex flex-col w-[283px] xl:w-[573px] lg:w-[400px] md:w-[500px] sm:w-[283px]'>
              <p className='xl:w-[500px] lg:w-[500px] md:w-full sm:w-[300px] w-[283px] text-[#193766] font-[DM+Sans&family] text-left font-medium leading-[44px] text-3xl '>
                Optimized For Posts on<span className='underline'>All Social Media:</span>   Facebook, Instagram & Twitter
              </p>
              <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
                The design has an aspect ratio of 1:1 which the majority of social media recommends. The image quality is also high (1080 * 1080), you can further increase 
                the image quality to 2x or more so that the design looks sharper.
              </p>
              <div className=''>
                <div className='bg-[#3B82F6] flex flex-row mt-5 justify-between py-6 px-7 rounded-xl'>
                  <h1 className='text-white font-[DM+Sans&family] font-bold text-base leading-[30px]'>
                    Preview For Instagram
                  </h1>
                  <Image className="" src="/arrow-right.svg" width={24} height={24} alt=""/>
                </div>

                <div className='bg-white hover:bg-[#3B82F6] flex flex-row mt-5 justify-between py-6 px-7 rounded-xl'>
                  <h1 className='text-[#193766] hover:text-white font-[DM+Sans&family] font-bold text-base leading-[30px]'>
                    Preview For Facebook
                  </h1>
                  <Image className="" src="/arrow-right (1).svg" width={24} height={24} alt=""/>
                </div>

                <div className='bg-white hover:bg-[#3B82F6] flex flex-row mt-5 justify-between py-6 px-7 rounded-xl'>
                  <h1 className='text-[#193766] hover:text-white font-[DM+Sans&family] font-bold text-base leading-[30px]'>
                    Preview For Twitter
                  </h1>
                  <Image className="" src="/arrow-right (1).svg" width={24} height={24} alt=""/>
                </div>
              </div>
            </div>

            <Image className="w-[280px] xl:w-[356px] lg:w-[356px] md:w-full sm:w-[280px] " src="/Group 12 (f).png" width={356} height={456} alt=""/>
          </div>
        </div>
      </div>


      <div className='xl:mx-28 lg:mx-4 md:mx-28 sm:mx-2 mx-4 my-20'>
        <div className='justify-between flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:gap-0 lg:gap-0 md:gap-20 sm:gap-2'>
          <div className="xl:w-[579px] lg:w-[479px] md:w-full sm:w-[279px] w-[280px] h-[333px] my-auto mr-0 xl:mr-20 lg:mr-0 md:mr-0 sm:mr-0">
            <Image className="" src="/Image 6 (f).png" width={579} height={333} alt=""/>
          </div>

          <div className='flex flex-col w-[283px] xl:w-[573px] lg:w-[400px] md:w-[500px] sm:w-[283px]'>
              <p className='xl:w-[500px] lg:w-[300px] md:w-full sm:w-[300px] w-[283px] text-[#193766] font-[DM+Sans&family] text-left font-medium leading-[44px] text-3xl '>
                Optimized For Posts on<span className='underline'>All Social Media:</span>   Facebook, Instagram & Twitter
              </p>
              <p className='mt-4 text-[#193766] font-[DM+Sans&family] font-normal leading-[30px] w-auto text-base '>
                The design has an aspect ratio of 1:1 which the majority of social media recommends. The image quality is also high (1080 * 1080), you can further increase 
                the image quality to 2x or more so that the design looks sharper.
              </p>
              <div className=''>
                <div className='mt-4 gap-4 flex '>
                  <Image className="" src="/check.png" width={24} height={24} alt=""/>
                  <h1 className='text-[#193766] text-base font-normal font-[DM+Sans&family] leading-[30px]  '>
                    Design content for products
                  </h1>
                </div>
                <div className='mt-4 gap-4 flex '>
                  <Image className="" src="/check.png" width={24} height={24} alt=""/>
                  <h1 className='text-[#193766] text-base font-normal font-[DM+Sans&family] leading-[30px] '>
                    Design content to offer services
                  </h1>
                </div>
                <div className='mt-4 gap-4 flex '>
                  <Image className="" src="/check.png" width={24} height={24} alt=""/>
                  <h1 className='text-[#193766] text-base font-normal font-[DM+Sans&family] leading-[30px]  '>
                    product to include Social Feeds
                  </h1>
                </div>
                <div className='mt-4 gap-4 flex '>
                  <Image className="" src="/close.png" width={24} height={24} alt=""/>
                  <h1 className='text-[#193766] text-base font-normal font-[DM+Sans&family] leading-[30px]  '>
                    Resell it without changes
                  </h1>
                </div>
                <div className='mt-4 gap-4 flex '>
                  <Image className="" src="/close.png" width={24} height={24} alt=""/>
                  <h1 className='text-[#193766] text-base font-normal font-[DM+Sans&family] leading-[30px]  '>
                    Create tool to add Social Feeds
                  </h1>
                </div>
              </div>
            </div>
        </div>
      </div>



      <div className=''>
        <div className='w-auto'>
        <Image className="absolute h-[680px]" src="/Rectangle 630.png" width={1440} height={1306} alt=""/>
        </div>
      </div>


</div>
    </div>


    
    </>
    );
  };
  
  export default wumbo;