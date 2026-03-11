import { useState } from 'react';

// 2008 Images
const image2008_001 = '/2008/001.jpg';
const image2008_002 = '/2008/002.jpg';
const image2008_003 = '/2008/003.jpg';

// 2009 Images
const image2009_watercooler = '/2009/001 2009 Water cooler.jpg';
const image2009_002 = '/2009MedicalCamp/002.jpg';
const image2009_003 = '/2009MedicalCamp/003.jpg';
const image2009_004 = '/2009MedicalCamp/004.jpg';
const image2009_006 = '/2009MedicalCamp/006.jpg';
const image2009_lokmat = '/2009MedicalCamp/Lokmat_B.gif';

// 2010 Images - Dental Camp
const image2010_001 = '/2010Dental/001.JPG';
const image2010_002 = '/2010Dental/002.jpg';
const image2010_003 = '/2010Dental/003.jpg';
const image2010_004 = '/2010Dental/004.jpg';
const image2010_005 = '/2010Dental/005.jpg';
const image2010_006 = '/2010Dental/006.jpg';
const image2010_007 = '/2010Dental/007.jpg';
const image2010_008 = '/2010Dental/008.JPG';
const image2010_009 = '/2010Dental/009.jpg';
const image2010_010 = '/2010Dental/010.jpg';
const image2010_011 = '/2010Dental/011.jpg';
const image2010_012 = '/2010Dental/012.jpg';
const image2010_013 = '/2010Dental/013.jpg';
const image2010_014 = '/2010Dental/014.jpg';
const image2010_015 = '/2010Dental/015.jpg';
const image2010_016 = '/2010Dental/016.jpg';
const image2010_017 = '/2010Dental/017.jpg';
const image2010_018 = '/2010Dental/018.jpg';
const image2010_019 = '/2010Dental/019.jpg';
const image2010_020 = '/2010Dental/020.jpg';
const image2010_021 = '/2010Dental/021.jpg';
const image2010_022 = '/2010Dental/022.jpg';
const image2010_023 = '/2010Dental/023.jpg';
const image2010_024 = '/2010Dental/024.jpg';
const image2010_025 = '/2010Dental/025.jpg';
const image2010_026 = '/2010Dental/026.jpg';
const image2010_027 = '/2010Dental/027.jpg';
const image2010_028 = '/2010Dental/028.jpg';
const image2010_picture1 = '/2010Dental/Picture1.png';
const image2010_sakal_25apr = '/2010Dental/Sakal 25th April 2010.jpg';
const image2010_sakal_3may = '/2010Dental/Sakal 3rd May 2010.jpg';
const image2010_lokmat_27apr = '/2010Dental/Lokmat 27th April 2010.jpg';
const image2010_lokmat_3may = '/2010Dental/Lokmat 3rd May 2010.jpg';

// 2010 Images - Bench Donation
const image2010_thanks = '/2010Benchesdonation/Thanking Letter.jpg';
const image2010_aug_snap1 = '/2010Benchesdonation/15th Aug Snap 1.jpg';
const image2010_aug_snap2 = '/2010Benchesdonation/15th Aug Snap 2.jpg';

// 2011 Images - Orthopedic Camp
const image2011_ortho_001 = '/2011Ortho/001.jpg';
const image2011_ortho_002 = '/2011Ortho/002.jpg';
const image2011_ortho_003 = '/2011Ortho/003.jpg';
const image2011_ortho_004 = '/2011Ortho/004.jpg';
const image2011_ortho_005 = '/2011Ortho/005.jpg';
const image2011_ortho_006 = '/2011Ortho/006.jpg';
const image2011_ortho_007 = '/2011Ortho/007.jpg';
const image2011_ortho_008 = '/2011Ortho/008.jpg';
const image2011_ortho_009 = '/2011Ortho/009.jpg';
const image2011_ortho_010 = '/2011Ortho/010.jpg';
const image2011_ortho_011 = '/2011Ortho/011.jpg';
const image2011_ortho_012 = '/2011Ortho/012.jpg';
const image2011_ortho_013 = '/2011Ortho/013.jpg';
const image2011_ortho_014 = '/2011Ortho/014.jpg';
const image2011_ortho_015 = '/2011Ortho/015.jpg';
const image2011_ortho_016 = '/2011Ortho/016.jpg';
const image2011_ortho_017 = '/2011Ortho/017.jpg';
const image2011_ortho_018 = '/2011Ortho/018.jpg';
const image2011_ortho_019 = '/2011Ortho/019.jpg';
const image2011_ortho_020 = '/2011Ortho/020.jpg';
const image2011_ortho_021 = '/2011Ortho/001a.jpg';
const image2011_ortho_prabhat = '/2011Ortho/Prabhat_B.jpg';

// 2011 Images - Science Exhibition
const image2011_sci_001 = '/2011Science/001.jpg';
const image2011_sci_002 = '/2011Science/002.jpg';
const image2011_sci_003 = '/2011Science/003.jpg';
const image2011_sci_004 = '/2011Science/004.jpg';
const image2011_sci_005 = '/2011Science/005.jpg';
const image2011_sci_006 = '/2011Science/006.jpg';
const image2011_sci_007 = '/2011Science/007.jpg';
const image2011_sci_008 = '/2011Science/008.jpg';
const image2011_sci_009 = '/2011Science/009.jpg';
const image2011_sci_010 = '/2011Science/010.jpg';
const image2011_sci_011 = '/2011Science/011.jpg';
const image2011_sci_012 = '/2011Science/012.jpg';
const image2011_sci_013 = '/2011Science/013.jpg';
const image2011_sci_014 = '/2011Science/014.jpg';
const image2011_sci_015 = '/2011Science/015.jpg';
const image2011_sci_016 = '/2011Science/016.jpg';
const image2011_sci_017 = '/2011Science/017.jpg';
const image2011_sci_018 = '/2011Science/018.jpg';
const image2011_sci_4909 = '/2011Science/4909_001.jpg';
const image2011_sci_4910 = '/2011Science/4910_001.jpg';
const image2011_sci_4911 = '/2011Science/4911_001.jpg';
const image2011_sci_4912 = '/2011Science/4912_001.jpg';
const jainParamparaPDF = '/2011Science/trust news in Jain Parampara.pdf';

// 2012 Images - CFL Distribution Dhakale
const image2012_001 = '/2012CFL/001.JPG';
const image2012_002 = '/2012CFL/002.JPG';
const image2012_003 = '/2012CFL/003.JPG';
const image2012_004 = '/2012CFL/004.JPG';
const image2012_005 = '/2012CFL/005.JPG';
const image2012_006 = '/2012CFL/006.JPG';
const image2012_007 = '/2012CFL/007.JPG';
const image2012_008 = '/2012CFL/008.JPG';
const image2012_009 = '/2012CFL/009.JPG';
const image2012_010 = '/2012CFL/010.JPG';
const image2012_011 = '/2012CFL/011.JPG';
const image2012_012 = '/2012CFL/012.JPG';
const image2012_013 = '/2012CFL/013.JPG';
const image2012_014 = '/2012CFL/014.JPG';
const image2012_015 = '/2012CFL/015.JPG';
const image2012_016 = '/2012CFL/016.JPG';
const image2012_017 = '/2012CFL/017.JPG';
const image2012_sakal = '/2012CFL/dhakale_cfl_Sakal_B.jpg';

// 2013 Images - CFL Distribution Talekarwadi
const image2013_cfl_001 = '/2013CFL/001.JPG';
const image2013_cfl_002 = '/2013CFL/002.JPG';
const image2013_cfl_003 = '/2013CFL/003.JPG';
const image2013_cfl_004 = '/2013CFL/004.JPG';
const image2013_cfl_005 = '/2013CFL/005.JPG';
const image2013_cfl_006 = '/2013CFL/006.JPG';
const image2013_cfl_007 = '/2013CFL/007.JPG';
const image2013_cfl_009 = '/2013CFL/009.JPG';
const image2013_cfl_010 = '/2013CFL/010.JPG';

// 2013 Images - Haemoglobin Camp
const image2013_hb_001 = '/2013Hb/001.JPG';
const image2013_hb_002 = '/2013Hb/002.JPG';
const image2013_hb_003 = '/2013Hb/003.JPG';
const image2013_hb_004 = '/2013Hb/004.JPG';
const image2013_hb_005 = '/2013Hb/005.jpg';
const image2013_hb_005a = '/2013Hb/005 a.JPG';
const image2013_hb_005b = '/2013Hb/005 b.JPG';
const image2013_hb_005c = '/2013Hb/005 C.JPG';
const image2013_hb_006 = '/2013Hb/006.JPG';
const image2013_hb_007 = '/2013Hb/007.JPG';
const image2013_hb_009 = '/2013Hb/009.JPG';
const image2013_hb_010 = '/2013Hb/010.jpg';
const image2013_hb_011 = '/2013Hb/011.JPG';
const image2013_hb_012 = '/2013Hb/012.JPG';
const image2013_hb_013 = '/2013Hb/013.JPG';
const image2013_hb_014 = '/2013Hb/014.JPG';
const image2013_hb_015 = '/2013Hb/015.JPG';
const image2013_hb_lokmat = '/2013Hb/LokmatHb_B.jpg';

// 2013 Images - Scholarships
const image2013_sch_001 = '/2013Scholarship/001.jpg';
const image2013_sch_002 = '/2013Scholarship/002.jpg';
const image2013_sch_003 = '/2013Scholarship/003.jpg';
const image2013_sch_004 = '/2013Scholarship/004.jpg';
 // 2014 Images - Multi-Focus Health Camp
const image2014_health_001 = '/2014Health/001.jpg';
const image2014_health_002 = '/2014Health/002.jpg';
const image2014_health_003 = '/2014Health/003.jpg';
const image2014_health_004 = '/2014Health/004.jpg';
const image2014_health_005 = '/2014Health/005.jpg';
const image2014_health_006 = '/2014Health/006.jpg';
const image2014_health_007 = '/2014Health/007.jpg';
const image2014_health_008 = '/2014Health/008.jpg';
const image2014_health_009 = '/2014Health/009.jpg';
const image2014_health_010 = '/2014Health/010.JPG';
const image2014_health_011 = '/2014Health/011.JPG';
const image2014_health_012 = '/2014Health/012.jpg';
const image2014_health_013 = '/2014Health/013.JPG';
const image2014_health_014 = '/2014Health/014.JPG';

// 2016 Images - Shet Tale (Farm Pond)
const image2016_001 = '/2016ShetTale/001.jpg';
const image2016_002 = '/2016ShetTale/002.jpg';
const image2016_002a = '/2016ShetTale/002a.jpg';
const image2016_003 = '/2016ShetTale/003.jpg';
const image2016_004 = '/2016ShetTale/004 a.jpg';
const image2016_004b = '/2016ShetTale/004b.jpg';
const image2016_004c = '/2016ShetTale/004c.jpg';
const image2016_004d = '/2016ShetTale/004d.jpg';
const image2016_004e = '/2016ShetTale/004e.jpg';
const image2016_005 = '/2016ShetTale/005.JPG';
const image2016_007 = '/2016ShetTale/007.JPG';
const image2016_009 = '/2016ShetTale/009.JPG';
const image2016_010 = '/2016ShetTale/0010.JPG';
const image2016_011 = '/2016ShetTale/0011.JPG';
const image2016_013 = '/2016ShetTale/0013.JPG';
const image2016_014 = '/2016ShetTale/0014.JPG';
const image2016_015 = '/2016ShetTale/015.JPG';
const image2016_016 = '/2016ShetTale/0016.JPG';
const image2016_017 = '/2016ShetTale/0017.JPG';
const image2016_018 = '/2016ShetTale/018.jpg';
const image2016_019 = '/2016ShetTale/019.jpg';
const image2016_020 = '/2016ShetTale/020.jpg';
const image2016_021 = '/2016ShetTale/0021.jpg';

// 2018 Images
const image2018_003 = '/2018/003.jpg';
const image2018_01 = '/2018/01.JPG';
const image2018_014 = '/2018/014.JPG';
const image2018_017 = '/2018/017.JPG';
const image2018_021 = '/2018/021.JPG';
const image2018_022 = '/2018/022.JPG';
const image2018_02b = '/2018/02b.JPG';
const image2018_02c = '/2018/02c.JPG';
const image2018_03 = '/2018/03.JPG';
const image2018_06 = '/2018/06.JPG';
const image2018_08 = '/2018/08.JPG';
const image2018_09 = '/2018/09.JPG';
const image2018_kesari = '/2018/Kesari Media news.jpg';
const image2018_pudhari = '/2018/Media Pudhari Coverage.jpg';

// 2020 Images - PM CARES Fund
const image2020_pmcares = '/2020PMCares/image152.jpg';
// 2020 Images
const image2020_001 = '/2020/001 Umed Parivar.jpg';
const image2020_002 = '/2020/002 Transformer.jpg';
const image2020_003 = '/2020/003 Transformer .jpg';
const image2020_004 = '/2020/004 Members at Umed Parivar.jpg';
const image2020_005 = '/2020/005 Review meeting.jpg';
const image2020_006 = '/2020/006 Members with Umed team.jpg';
const image2020_007 = '/2020/007 Family Memebers 2.jpg';
const image2020_thanks = '/2020/Thanks.jpg';

// 2021 Images
const image2021_001 = '/2021/001 .jpg';
const image2021_002 = '/2021/002.jpg';
const image2021_003 = '/2021/003.jpg';
const image2021_004 = '/2021/004.jpg';
const image2021_005 = '/2021/005.jpg';
const image2021_006 = '/2021/006.jpg';
const image2021_007 = '/2021/007.jpg';
const image2021_008 = '/2021/008.jpg';
const image2021_009 = '/2021/009.jpg';
const image2021_010 = '/2021/010.jpg';
const image2021_011 = '/2021/011.jpg';
const image2021_012 = '/2021/012.jpg';
const image2021_013 = '/2021/013.jpg';
const image2021_014 = '/2021/014.jpg';
const image2021_015 = '/2021/015.jpg';

// 2023 Images
const image2023_001 = '/2023/001.jpg';
const image2023_002 = '/2023/002.jpg';
const image2023_003 = '/2023/003.jpg';
const image2023_004 = '/2023/004.jpg';
const image2023_005 = '/2023/005.jpg';
const image2023_thanks = '/2023/Thanks note.jpg';

// 2025 Images
const image2025_001 = '/2025/001.jpg';
const image2025_002 = '/2025/002.jpg';
const image2025_004 = '/2025/004.jpg';
const image2025_005 = '/2025/005.jpg';
const image2025_006 = '/2025/006.JPG';
const image2025_007 = '/2025/007.jpg';
const image2025_008 = '/2025/008.jpg';
const image2025_009 = '/2025/009.jpg';
const image2025_010 = '/2025/010.jpg';
const image2025_011 = '/2025/011.jpg';
const image2025_012 = '/2025/012.JPG';
const thanksPDF2025 = '/2025/Thanks Note_.pdf';

const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2018', '2020', '2021', '2023', '2025'];

// Define image galleries for each year
const eventImages: Record<string, Array<{src: string, alt: string, caption: string}>> = {
  '2025': [
    { src: image2025_001, alt: 'Event 2025 - 001', caption: 'Event activity 2025' },
    { src: image2025_002, alt: 'Event 2025 - 002', caption: 'Community gathering' },
    { src: image2025_004, alt: 'Event 2025 - 004', caption: 'Program in progress' },
    { src: image2025_005, alt: 'Event 2025 - 005', caption: 'Participants engaged' },
    { src: image2025_006, alt: 'Event 2025 - 006', caption: 'Team collaboration' },
    { src: image2025_007, alt: 'Event 2025 - 007', caption: 'Community support' },
    { src: image2025_008, alt: 'Event 2025 - 008', caption: 'Event milestone' },
    { src: image2025_009, alt: 'Event 2025 - 009', caption: 'Active participation' },
    { src: image2025_010, alt: 'Event 2025 - 010', caption: 'Successful initiative' },
    { src: image2025_011, alt: 'Event 2025 - 011', caption: 'Community impact' },
    { src: image2025_012, alt: 'Event 2025 - 012', caption: 'Closing ceremony' },
  ],
  '2023': [
    { src: image2023_001, alt: 'Digital Learning Initiative', caption: 'Digital Learning to Rural Classrooms' },
    { src: image2023_002, alt: 'Classroom Setup', caption: 'Setting up digital infrastructure' },
    { src: image2023_003, alt: 'Student Learning', caption: 'Students engaging with digital content' },
    { src: image2023_004, alt: 'Educational Program', caption: 'Educational program in progress' },
    { src: image2023_005, alt: 'Community Participation', caption: 'Community members participating' },
    { src: image2023_thanks, alt: 'Thanks Note', caption: 'Appreciation and gratitude' },
  ],
  '2021': [
    { src: image2021_001, alt: 'Vaccination Drive 2021', caption: 'COVID-19 Vaccination Initiative' },
    { src: image2021_002, alt: 'Vaccination Process', caption: 'Medical team conducting vaccination' },
    { src: image2021_003, alt: 'Beneficiaries', caption: 'Beneficiaries receiving vaccine' },
    { src: image2021_004, alt: 'Healthcare Workers', caption: 'Healthcare professionals at work' },
    { src: image2021_005, alt: 'Vaccination Camp', caption: 'Vaccination camp setup' },
    { src: image2021_006, alt: 'Documentation', caption: 'Recording vaccination details' },
    { src: image2021_007, alt: 'Medical Team', caption: 'Medical team coordination' },
    { src: image2021_008, alt: 'Vaccination Progress', caption: 'Progress of vaccination drive' },
    { src: image2021_009, alt: 'Community Care', caption: 'Community care initiatives' },
    { src: image2021_010, alt: 'Health Awareness', caption: 'Health awareness programs' },
    { src: image2021_011, alt: 'Second Dose Drive', caption: 'Second dose vaccination drive' },
    { src: image2021_012, alt: 'Vaccination Completion', caption: 'Completing vaccination process' },
    { src: image2021_013, alt: 'Post-Vaccination', caption: 'Post-vaccination care and monitoring' },
    { src: image2021_014, alt: 'Success Milestone', caption: 'Successful completion milestone' },
    { src: image2021_015, alt: 'Certificate Distribution', caption: 'Certificate distribution ceremony' },
  ],
    '2020-pmcares': [
    { src: image2020_pmcares, alt: 'PM CARES Fund Contribution', caption: 'Contribution to PM CARES Fund during COVID-19' },
  ],
  '2020': [
    { src: image2020_001, alt: 'Umed Parivar Meeting', caption: 'Meeting at Umed Parivar' },
    { src: image2020_002, alt: 'Transformer Installation', caption: 'Transformer installation project' },
    { src: image2020_003, alt: 'Transformer Setup', caption: 'Setting up electrical transformer' },
    { src: image2020_004, alt: 'Members at Umed Parivar', caption: 'Members gathering at Umed Parivar' },
    { src: image2020_005, alt: 'Review Meeting', caption: 'Review meeting with team members' },
    { src: image2020_006, alt: 'Members with Umed Team', caption: 'Members collaborating with Umed team' },
    { src: image2020_007, alt: 'Family Members', caption: 'Family members participation' },
    { src: image2020_thanks, alt: 'Thanks Note', caption: 'Appreciation and thanks' },
  ],
  '2018': [
    { src: image2018_003, alt: 'Event 2018 - 003', caption: 'Community event 2018' },
    { src: image2018_01, alt: 'Event 2018 - 01', caption: 'Event activity' },
    { src: image2018_014, alt: 'Event 2018 - 014', caption: 'Team gathering' },
    { src: image2018_017, alt: 'Event 2018 - 017', caption: 'Public participation' },
    { src: image2018_021, alt: 'Event 2018 - 021', caption: 'Program execution' },
    { src: image2018_022, alt: 'Event 2018 - 022', caption: 'Community involvement' },
    { src: image2018_02b, alt: 'Event 2018 - 02b', caption: 'Event highlights' },
    { src: image2018_02c, alt: 'Event 2018 - 02c', caption: 'Active engagement' },
    { src: image2018_03, alt: 'Event 2018 - 03', caption: 'Participants in action' },
    { src: image2018_06, alt: 'Event 2018 - 06', caption: 'Successful initiative' },
    { src: image2018_08, alt: 'Event 2018 - 08', caption: 'Community support' },
    { src: image2018_09, alt: 'Event 2018 - 09', caption: 'Event milestone' },
    { src: image2018_kesari, alt: 'Kesari Media Coverage', caption: 'Media coverage - Kesari' },
    { src: image2018_pudhari, alt: 'Media Pudhari Coverage', caption: 'Media coverage - Pudhari' },
  ],
    '2014-health': [
    { src: image2014_health_001, alt: 'Health Camp 2014', caption: 'Multi-focus health camp at Dimbhe' },
    { src: image2014_health_002, alt: 'Patient screening', caption: 'Patient screening in progress' },
    { src: image2014_health_003, alt: 'Medical examination', caption: 'Medical examination by specialists' },
    { src: image2014_health_004, alt: 'Heart screening', caption: 'Heart ailment screening' },
    { src: image2014_health_005, alt: 'Cancer awareness', caption: 'Cancer awareness and screening' },
    { src: image2014_health_006, alt: 'Dr. P.K. Grant', caption: 'Dr. P.K. Grant examining patients' },
    { src: image2014_health_007, alt: 'Patient consultation', caption: 'Expert consultation with patients' },
    { src: image2014_health_008, alt: 'Camp activities', caption: 'Health camp activities' },
    { src: image2014_health_009, alt: 'Community participation', caption: 'Community members at the camp' },
    { src: image2014_health_010, alt: 'Camp coordination', caption: 'Camp coordination and management' },
    { src: image2014_health_011, alt: 'Medical team', caption: 'Ruby Hall Clinic medical team' },
    { src: image2014_health_012, alt: 'Patient care', caption: 'Compassionate patient care' },
    { src: image2014_health_013, alt: 'Health awareness', caption: 'Health awareness session' },
    { src: image2014_health_014, alt: 'Camp overview', caption: 'Overview of the health camp' },
  ],
  '2016-shettale': [
    { src: image2016_001, alt: 'Shet Tale Project', caption: 'Shet Tale construction site' },
    { src: image2016_002, alt: 'Excavation work', caption: 'Excavation work in progress' },
    { src: image2016_003, alt: 'Farm pond digging', caption: 'Farm pond digging' },
    { src: image2016_004, alt: 'Construction progress', caption: 'Construction progress' },
      { src: image2016_004b, alt: 'Construction progress', caption: 'Construction progress' },
        { src: image2016_004c, alt: 'Construction progress', caption: 'Construction progress' },
          { src: image2016_004d, alt: 'Construction progress', caption: 'Construction progress' },
            { src: image2016_004e, alt: 'Construction progress', caption: 'Construction progress' },
    { src: image2016_005, alt: 'Site overview', caption: 'Aerial view of the site' },
    
    { src: image2016_007, alt: 'Pond formation', caption: 'Pond formation taking shape' },
    { src: image2016_009, alt: 'Water storage area', caption: 'Water storage area preparation' },
    { src: image2016_010, alt: 'Community involvement', caption: 'Community involvement in project' },
    { src: image2016_011, alt: 'Construction milestone', caption: 'Construction milestone achieved' },
      { src: image2016_002a, alt: 'Construction progress', caption: 'Construction progress' },
    { src: image2016_013, alt: 'Landscape transformation', caption: 'Landscape transformation' },
    { src: image2016_014, alt: 'Water collection area', caption: 'Water collection area' },
    { src: image2016_015, alt: 'Project site', caption: 'Project site at Shantivan' },
    { src: image2016_016, alt: 'Farm surroundings', caption: 'Farm surroundings and terrain' },
    { src: image2016_017, alt: 'Completed structure', caption: 'Completed pond structure' },
    { src: image2016_018, alt: 'Water retention', caption: 'Water retention capability' },
    { src: image2016_019, alt: 'Beneficiary farm', caption: 'Beneficiary farm area' },
    { src: image2016_020, alt: 'Drought solution', caption: 'A solution against drought' },
    { src: image2016_021, alt: 'Agricultural support', caption: 'Supporting agricultural needs' },
  ],
    '2012-cfl': [
    { src: image2012_001, alt: 'CFL Distribution 2012', caption: 'CFL distribution drive at Dhakale' },
    { src: image2012_002, alt: 'Village engagement', caption: 'Engaging with Dhakale villagers' },
    { src: image2012_003, alt: 'Bulb replacement', caption: 'Replacing incandescent bulbs with CFLs' },
    { src: image2012_004, alt: 'Household survey', caption: 'Energy survey findings' },
    { src: image2012_005, alt: 'Distribution in progress', caption: 'CFL distribution in progress' },
    { src: image2012_006, alt: 'Community participation', caption: 'Community members participating' },
    { src: image2012_007, alt: 'Family receiving CFLs', caption: 'Family receiving CFL bulbs' },
    { src: image2012_008, alt: 'Trust members', caption: 'Trust members at the drive' },
    { src: image2012_009, alt: 'Village coverage', caption: 'Covering the entire village' },
    { src: image2012_010, alt: 'Energy awareness', caption: 'Energy conservation awareness' },
    { src: image2012_011, alt: 'Dignitaries present', caption: 'Dignitaries at the event' },
    { src: image2012_012, alt: 'Installation help', caption: 'Helping with CFL installation' },
    { src: image2012_013, alt: 'Student volunteers', caption: 'B.D. Kale College student volunteers' },
    { src: image2012_014, alt: 'Event coordination', caption: 'Event coordination' },
    { src: image2012_015, alt: 'Villager appreciation', caption: 'Villagers appreciating the initiative' },
    { src: image2012_016, alt: 'Successful drive', caption: 'Successful completion of the drive' },
    { src: image2012_017, alt: 'Group photo', caption: 'Group photo with participants' },
  ],
  '2012-media': [
    { src: image2012_sakal, alt: 'Sakal Media Coverage', caption: 'Media coverage - Sakal newspaper' },
  ],
  '2013-cfl': [
    { src: image2013_cfl_001, alt: 'CFL Distribution Talekarwadi', caption: 'CFL drive at Talekarwadi village' },
    { src: image2013_cfl_002, alt: 'Bulb distribution', caption: 'Distributing CFL bulbs to families' },
    { src: image2013_cfl_003, alt: 'Village engagement', caption: 'Engaging with Talekarwadi residents' },
    { src: image2013_cfl_004, alt: 'Energy conservation', caption: 'Promoting energy conservation' },
    { src: image2013_cfl_005, alt: 'Family receiving bulbs', caption: 'Family receiving CFL replacements' },
    { src: image2013_cfl_006, alt: 'Community support', caption: 'Wholehearted community support' },
    { src: image2013_cfl_007, alt: 'Adarsh Gram village', caption: 'Adarsh Gram Panchayat village' },
    { src: image2013_cfl_009, alt: 'Event highlights', caption: 'Drive highlights' },
    { src: image2013_cfl_010, alt: 'Successful initiative', caption: 'Successful environmental initiative' },
  ],
  '2013-hb': [
    { src: image2013_hb_001, alt: 'Haemoglobin Camp 2013', caption: 'Haemoglobin check-up camp' },
    { src: image2013_hb_002, alt: 'Medical team', caption: 'Medical team at the camp' },
    { src: image2013_hb_003, alt: 'Patient registration', caption: 'Patient registration process' },  
    { src: image2013_hb_004, alt: 'Blood sample collection', caption: 'Collecting blood samples' },
    { src: image2013_hb_005, alt: 'Testing process', caption: 'Testing haemoglobin levels' },
    { src: image2013_hb_005a, alt: 'Testing process 5a', caption: 'Testing process - Step 1' },
    { src: image2013_hb_005b, alt: 'Testing process 5b', caption: 'Testing process - Step 2' },
    { src: image2013_hb_005c, alt: 'Testing process 5c', caption: 'Testing process - Step 3' },
    { src: image2013_hb_006, alt: 'Health awareness', caption: 'Health awareness session' },
    { src: image2013_hb_007, alt: 'Patient consultation', caption: 'Consultation based on test results' },
    { src: image2013_hb_009, alt: 'Community participation', caption: 'Community members participating' },
    { src: image2013_hb_010, alt: 'Haemoglobin Camp 2013', caption: 'Haemoglobin check-up camp' },
    { src: image2013_hb_011, alt: 'Student screening', caption: 'Girl students being screened' },
    { src: image2013_hb_012, alt: 'Medical testing', caption: 'Medical team conducting tests' },
    { src: image2013_hb_013, alt: 'Health awareness', caption: 'Health awareness session' },
    { src: image2013_hb_014, alt: 'Results guidance', caption: 'Providing guidance on results' },
    { src: image2013_hb_015, alt: 'Camp activities', caption: 'Camp activities and care' },
  ],
  '2013-hb-media': [
    { src: image2013_hb_lokmat, alt: 'Lokmat Coverage', caption: 'Media coverage - Lokmat newspaper' },
  ],
  '2013-scholarship': [
    { src: image2013_sch_001, alt: 'Scholarship Distribution', caption: 'Scholarship award ceremony' },
    { src: image2013_sch_002, alt: 'Student receiving scholarship', caption: 'Meritorious student receiving scholarship' },
    { src: image2013_sch_003, alt: 'Award ceremony', caption: 'Students at the award ceremony' },
    { src: image2013_sch_004, alt: 'Scholarship recipients', caption: 'Scholarship recipients with Trust members' },
  ],
    '2011-ortho': [
    { src: image2011_ortho_001, alt: 'Orthopedic Camp Inauguration', caption: 'Camp inauguration ceremony' },
    { src: image2011_ortho_002, alt: 'Dilip Walse Patil', caption: 'Inauguration by Speaker Dilip Walse Patil' },
    { src: image2011_ortho_003, alt: 'Dr. K.H. Sancheti', caption: 'Padma Vibhushan Dr. K.H. Sancheti at the camp' },
    { src: image2011_ortho_004, alt: 'Patient consultation', caption: 'Doctor consulting with patient' },
    { src: image2011_ortho_005, alt: 'Orthopedic examination', caption: 'Orthopedic examination in progress' },
    { src: image2011_ortho_006, alt: 'BDM screening', caption: 'Bone Density Machine screening' },
    { src: image2011_ortho_007, alt: 'Medical team', caption: 'Medical team providing care' },
    { src: image2011_ortho_008, alt: 'Patient registration', caption: 'Patient registration at the camp' },
    { src: image2011_ortho_009, alt: 'Physiotherapy session', caption: 'Physiotherapy consultation' },
    { src: image2011_ortho_010, alt: 'Camp activities', caption: 'Camp activities in progress' },
    { src: image2011_ortho_011, alt: 'Patient care', caption: 'Compassionate patient care' },
    { src: image2011_ortho_012, alt: 'Expert consultation', caption: 'Expert orthopedic consultation' },
    { src: image2011_ortho_013, alt: 'Community participation', caption: 'Community members at the camp' },
    { src: image2011_ortho_014, alt: 'Treatment guidance', caption: 'Treatment guidance and advice' },
    { src: image2011_ortho_015, alt: 'Medicine distribution', caption: 'Free medicine distribution' },
    { src: image2011_ortho_016, alt: 'Camp overview', caption: 'Overview of the health camp' },
    { src: image2011_ortho_017, alt: 'Dignitaries present', caption: 'Dignitaries at the camp' },
    { src: image2011_ortho_018, alt: 'Patient examination', caption: 'Patient being examined' },
    { src: image2011_ortho_019, alt: 'Camp coordination', caption: 'Camp coordination and management' },
    { src: image2011_ortho_020, alt: 'Successful camp', caption: 'Successful camp moments' },
    { src: image2011_ortho_021, alt: 'Group photo', caption: 'Group photo of team and participants' },
  ],
  '2011-ortho-media': [
    { src: image2011_ortho_prabhat, alt: 'Prabhat Media Coverage', caption: 'Media coverage - Prabhat newspaper' },
  ],
  '2011-science': [
    { src: image2011_sci_001, alt: 'Science Exhibition 2011', caption: 'Science Projects Exhibition' },
    { src: image2011_sci_002, alt: 'Project display', caption: 'Science project on display' },
    { src: image2011_sci_003, alt: 'Student engagement', caption: 'Students engaging with projects' },
    { src: image2011_sci_004, alt: 'Optics project', caption: 'Optics demonstration' },
    { src: image2011_sci_005, alt: 'Mechanics model', caption: 'Mechanics model display' },
    { src: image2011_sci_006, alt: 'Aero-modeling', caption: 'Aero-modeling demonstration' },
    { src: image2011_sci_007, alt: 'Exhibition visitors', caption: 'Visitors exploring exhibits' },
    { src: image2011_sci_008, alt: 'Electrical projects', caption: 'Electrical connections project' },
    { src: image2011_sci_009, alt: 'Interactive learning', caption: 'Interactive learning session' },
    { src: image2011_sci_010, alt: 'Student participation', caption: 'Students participating actively' },
    { src: image2011_sci_011, alt: 'Exhibition highlights', caption: 'Exhibition highlights' },
    { src: image2011_sci_012, alt: 'Geometry models', caption: 'Geometry and geography models' },
    { src: image2011_sci_013, alt: 'Hands-on learning', caption: 'Hands-on science learning' },
    { src: image2011_sci_014, alt: 'Project explanation', caption: 'Volunteers explaining projects' },
    { src: image2011_sci_015, alt: 'Scientific games', caption: 'Scientific games and activities' },
    { src: image2011_sci_016, alt: 'Handicraft skills', caption: 'Handicraft skills demonstration' },
    { src: image2011_sci_017, alt: 'Exhibition crowd', caption: 'Enthusiastic crowd at exhibition' },
    { src: image2011_sci_018, alt: 'Closing ceremony', caption: 'Exhibition closing ceremony' },
    { src: image2011_sci_4909, alt: 'Exhibition moment 1', caption: 'Exhibition highlights' },
    { src: image2011_sci_4910, alt: 'Exhibition moment 2', caption: 'Science in action' },
    { src: image2011_sci_4911, alt: 'Exhibition moment 3', caption: 'Young minds at work' },
    { src: image2011_sci_4912, alt: 'Exhibition moment 4', caption: 'Inspiring curiosity' },
  ],
  '2010-dental': [
    { src: image2010_001, alt: 'Dental Camp 2010', caption: 'Dental health camp inauguration' },
    { src: image2010_002, alt: 'Patient examination', caption: 'Doctors examining patients' },
    { src: image2010_003, alt: 'Dental treatment', caption: 'Dental treatment in progress' },
    { src: image2010_004, alt: 'Camp activities', caption: 'Health camp activities' },
    { src: image2010_005, alt: 'Medical team', caption: 'Medical team at work' },
    { src: image2010_006, alt: 'Patient care', caption: 'Compassionate patient care' },
    { src: image2010_007, alt: 'Awareness session', caption: 'Oral health awareness session' },
    { src: image2010_008, alt: 'Community participation', caption: 'Villagers participating in the camp' },
    { src: image2010_009, alt: 'Dental checkup', caption: 'Dental checkup in progress' },
    { src: image2010_010, alt: 'Treatment setup', caption: 'Treatment setup at camp' },
    { src: image2010_011, alt: 'Patient registration', caption: 'Patient registration desk' },
    { src: image2010_012, alt: 'Dental procedure', caption: 'Dental procedure being performed' },
    { src: image2010_013, alt: 'Camp overview', caption: 'Overview of the dental camp' },
    { src: image2010_014, alt: 'Expert consultation', caption: 'Expert dental consultation' },
    { src: image2010_015, alt: 'Patient queue', caption: 'Patients waiting for checkup' },
    { src: image2010_016, alt: 'Diagnostic session', caption: 'Diagnostic session' },
    { src: image2010_017, alt: 'Camp gathering', caption: 'Gathering at dental camp' },
    { src: image2010_018, alt: 'Health awareness', caption: 'Health awareness drive' },
    { src: image2010_019, alt: 'Dental equipment', caption: 'Advanced dental equipment' },
    { src: image2010_020, alt: 'Team coordination', caption: 'Medical team coordination' },
    { src: image2010_021, alt: 'Treatment area', caption: 'Treatment area setup' },
    { src: image2010_022, alt: 'Patient interaction', caption: 'Doctor-patient interaction' },
    { src: image2010_023, alt: 'Camp success', caption: 'Successful camp moments' },
    { src: image2010_024, alt: 'Community response', caption: 'Overwhelming community response' },
    { src: image2010_025, alt: 'Dental care', caption: 'Dental care for all ages' },
    { src: image2010_026, alt: 'Camp highlights', caption: 'Camp highlights' },
    { src: image2010_027, alt: 'Closing moments', caption: 'Camp closing moments' },
    { src: image2010_028, alt: 'Group photo', caption: 'Group photo of team and participants' },
    { src: image2010_picture1, alt: 'Camp poster', caption: 'Dental camp poster' },
  ],
  '2010-media': [
    { src: image2010_sakal_25apr, alt: 'Sakal Coverage 25th April', caption: 'Media coverage - Sakal, 25th April 2010' },
    { src: image2010_sakal_3may, alt: 'Sakal Coverage 3rd May', caption: 'Media coverage - Sakal, 3rd May 2010' },
    { src: image2010_lokmat_27apr, alt: 'Lokmat Coverage 27th April', caption: 'Media coverage - Lokmat, 27th April 2010' },
    { src: image2010_lokmat_3may, alt: 'Lokmat Coverage 3rd May', caption: 'Media coverage - Lokmat, 3rd May 2010' },
  ],
  '2010-bench': [
    { src: image2010_aug_snap1, alt: 'Bench Donation Ceremony', caption: 'Bench donation ceremony at B.D. Kale College' },
    { src: image2010_aug_snap2, alt: 'College Infrastructure', caption: 'Supporting college infrastructure' },
    { src: image2010_thanks, alt: 'Thanking Letter', caption: 'Letter of appreciation from B.D. Kale College' },
  ],
  '2009-health': [
    { src: image2009_002, alt: 'Health Camp 2009', caption: 'Free Diabetes & Heart Disease Health Camp' },
    { src: image2009_003, alt: 'Medical examination', caption: 'Doctors examining patients at camp' },
    { src: image2009_004, alt: 'ECG Testing', caption: 'ECG testing facility at the camp' },
    { src: image2009_006, alt: 'Camp activities', caption: 'Health camp activities and patient care' },
    { src: image2009_lokmat, alt: 'Lokmat Media Coverage', caption: 'Media coverage - Lokmat newspaper' },
  ],
  '2009-water': [
    { src: image2009_watercooler, alt: 'Water Cooler at B.D. Kale College', caption: 'Water cooler installed at B.D. Kale College, Ghodegaon' },
  ],
  '2008': [
    { src: image2008_001, alt: 'Solar Panel Installation', caption: 'Installing solar panels at the school' },
    { src: image2008_002, alt: 'Inauguration Ceremony', caption: 'Independence Day inauguration ceremony' },
    { src: image2008_003, alt: 'Solar System Setup', caption: '3.25 Kw solar power generation system' },
  ],
};

const Events = () => {
  const [activeYear, setActiveYear] = useState('2021');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, caption: string} | null>(null);

  // Check if a year has any images (including sub-galleries)
  const yearHasImages = (year: string): boolean => {
    if (eventImages[year]) return true;
    // Check for sub-galleries like '2010-dental', '2009-health', etc.
    return Object.keys(eventImages).some(key => key.startsWith(year + '-') || key === year);
  };

  // Image Gallery Component
  const ImageGallery = ({ galleryKey, title }: { galleryKey: string; title?: string }) => {
    const images = eventImages[galleryKey];
    
    if (!images || images.length === 0) return null;

    return (
      <div className="event-gallery">
        <h4 className="gallery-title">
          <i className="fas fa-camera"></i> {title || 'Event Photographs'}
        </h4>
        <div className="event-images-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="event-image-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="image-overlay">
                <i className="fas fa-search-plus"></i>
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Lightbox Modal for full-size images
  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div 
        className="image-modal-overlay" 
        onClick={() => setSelectedImage(null)}
      >
        <div className="image-modal-content">
          <button 
            className="modal-close-btn"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fas fa-times"></i>
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
          />
          <p className="image-caption">{selectedImage.caption}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="events-section" id="events">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-calendar-alt"></i> Our Journey</span>
        <h2>Events & Milestones</h2>
        <p>Our commitment to social service through the years</p>
      </div>
      <div className="events-container">
        <div className="formation-box">
          <h3><i className="fas fa-landmark"></i> Trust Formation</h3>
          <p>The Trust was conceptualised and constituted in the year 2007 and was registered under the Societies Registration Act, 1860 on <strong>12th February, 2007</strong></p>
        </div>

        <div className="years-grid">
          {years.map((year) => (
            <span
              key={year}
              className={`year-badge ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
              {yearHasImages(year) && (
                <i className="fas fa-image year-has-images"></i>
              )}
            </span>
          ))}
        </div>

        {/* Year 2021 */}
        {activeYear === '2021' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2021</span>
              <h3>Umed Pariwar - COVID Vaccination Drives</h3>
              <span className="category"><i className="fas fa-heartbeat"></i> Category: Health</span>
            </div>
            <div className="featured-event-content">
              <p>The COVID-19 pandemic has demonstrated the interconnected nature of our world – and that no one is safe until everyone is safe. The pandemic has been one of the greatest health crises in recorded history. Thanks to rapid advances in science and technology, the light at the end of the tunnel is getting closer.</p>
              
              <p>Intellectually Development Disable people are an integral part of our society and in current situation Covid-19 vaccination of these members is equally important. It is important that the vaccination is done in their comfort zone through on location vaccination drive or otherwise it is a hard task to take these members to a vaccination center.</p>
              
              <p><strong>Khinvasara Pariwar Trust in association with Pune Municipal Corporation (PMC)</strong> has carried out a vaccination drive at Umed Parivar Wadki for first and second dose of Covishield vaccine. It was PMC's first on site vaccination drive out of Pune municipal boundary.</p>
              
              <p>The drive was conducted on <strong>24th July 2021</strong> for the first dose and on <strong>23rd October 2021</strong> for the second dose. More than 34 team members of Umed Parivar alongwith their staff have been vaccinated successfully.</p>
              
              <p>Our Trust thanks PMC's doctors and the vaccination drive team's co-operation for carrying out this activity effortlessly and in an organized manner for both doses. Umed Parivar Trust has thanked our Trust for making this Vaccination drive successful for their team members.</p>

              <ImageGallery galleryKey="2021" />

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-syringe"></i>
                  <h4>34+</h4>
                  <p>People Vaccinated</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-calendar-check"></i>
                  <h4>2</h4>
                  <p>Vaccination Drives</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-hospital"></i>
                  <h4>PMC</h4>
                  <p>Partnership</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2023 */}
        {activeYear === '2023' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2023</span>
              <h3>Bringing Digital Learning to Rural Classrooms</h3>
              <span className="category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
            </div>
            <div className="featured-event-content">
              <p><strong>Empowering students at Lalbahadur Shastri Vidyalay, Amondi with e-learning tools so potential meets opportunity.</strong></p>
              
              <p>With our Education focus area, the Khinvasara Family Trust has enabled the installation of a Digital E-Learning Kit for students of 8th to 10th standard at the school located in Ambegaon Taluka in <strong>Dec 2023</strong>.</p>
              
              <p>Being a remote school, it faces ongoing challenges such as limited availability of teachers and restricted access to new-age technology in education. Despite these constraints, the students show strong potential and a genuine eagerness to learn. With the introduction of digital e-learning modules, students now have improved access to visual, interactive learning that supports better understanding of core subjects and concepts.</p>
              
              <p>The project was successfully implemented by <strong>Sumconcepts Technologies, Pune</strong>, through their established education enablement offering under Compkin.</p>
              
              <p>This initiative reflects our commitment to bridging the digital edge and creating equal learning opportunities for students in rural remote areas—helping bright young minds shine through access to modern education tools.</p>

              <ImageGallery galleryKey="2023" />

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-laptop"></i>
                  <h4>E-Learning Kit</h4>
                  <p>Digital Tools</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-graduation-cap"></i>
                  <h4>8-10</h4>
                  <p>Standards</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Ambegaon</h4>
                  <p>Taluka</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-handshake"></i>
                  <h4>Sumconcepts</h4>
                  <p>Partner</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2025 */}
        {activeYear === '2025' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2025</span>
              <h3>Tree Plantation Drive at Village Vetale</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Environment</span>
            </div>
            <div className="featured-event-content">
              <p>On <strong>22nd June 2025</strong>, a tree plantation drive was organized by <strong>Khinvasara Parivar Trust in collaboration with the 14Trees Foundation</strong> at the serene Village Vetale. The event was truly heartwarming and impactful.</p>
              
              <p>With enthusiastic participation from all family members of all ages and the inspiring support of the passionate 14Trees volunteers, the event beautifully blended purpose and joy. From scenic hikes to hands-on tree planting, it was a day filled with nature, bonding, and shared commitment to our environment. All the saplings planted will be maintained by the foundation for years to come.</p>
              
              <p>This initiative aligns with our Trust's key focus on environmental responsibility towards mother earth.</p>

              <div className="event-details-box">
                <h4><i className="fas fa-info-circle"></i> About 14Trees Foundation</h4>
                <p><strong>14 Trees Foundation</strong> is building a sustainable, carbon-footprint-neutral ecosystem through re-forestation. The foundation is restoring native green cover on ecologically degraded patches of barren hills near Pune.</p>
                <p><a href="https://www.14trees.org/" target="_blank" rel="noopener noreferrer" className="event-link"><i className="fas fa-external-link-alt"></i> Visit 14Trees Foundation</a></p>
              </div>

              <a href={thanksPDF2025} target="_blank" rel="noopener noreferrer" className="gratitude-document">
                <i className="fas fa-file-pdf"></i> View Thanks Note & Gratitude
              </a>

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-tree"></i>
                  <h4>Tree Planting</h4>
                  <p>Environmental Initiative</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <h4>All Ages</h4>
                  <p>Family Participation</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Vetale</h4>
                  <p>Village</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-handshake"></i>
                  <h4>14Trees</h4>
                  <p>Partner</p>
                </div>
              </div>
            </div>
            <ImageGallery galleryKey="2025" />
          </div>
        )}

                {/* Year 2020 - ENHANCED */}
        {activeYear === '2020' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2020</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Social Responsibility</span>
            </div>
            <div className="featured-event-content">

              {/* Event 1: Umed Pariwar - Electricity Infrastructure */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-bolt"></i> 1. Umed Pariwar – Electricity Infrastructure</h4>
                <span className="sub-category"><i className="fas fa-heartbeat"></i> Category: Health</span>

                <p>Umed Pariwar is an organization working for the rehabilitation of Intellectually Development Disable persons. It has well equipped residential facility in Wadki-Hadapsar – close to Pune. It provides mentoring and training of these special persons to help them to become acceptable and functional members of the society. The organization is private and depends on charity from individual doners and corporates for its operation.</p>
                
                <p>A major challenge faced by the organization was erratic supply of power supply. The single-phase power supply made equipment like water pumps not usable. On approaching MSEDCL to resolve the issue, the organization was asked to install a transformer and power line at their own cost, which was about Rs 7 Lakhs.</p>
                
                <p>To help Umed Pariwar to overcome this problem, <strong>Khinvasara Pariwar Trust in association with Mahati Powerlines and M/s G.V Lele</strong> supplied and installed 200 KVA Transformer and HT equipment.</p>
                
                <p>The project was completed in the <strong>first quarter of 2020</strong>. Installation of the transformer has resulted in the following improvements:</p>

                <ul className="event-list">
                  <li><i className="fas fa-check-circle"></i> Continuous electricity supply is now available leading to proper usage of electrical equipment</li>
                  <li><i className="fas fa-check-circle"></i> Elimination of power fluctuation has resulted in reduced maintenance of equipment</li>
                  <li><i className="fas fa-check-circle"></i> With regulated 3 phase supply it is now possible to operate grid connected solar power plant reducing the electricity bill</li>
                </ul>

                <ImageGallery galleryKey="2020" title="Project Photographs" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-bolt"></i>
                    <h4>200 KVA</h4>
                    <p>Transformer Capacity</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-rupee-sign"></i>
                    <h4>₹7 Lakhs</h4>
                    <p>Project Cost</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake"></i>
                    <h4>3</h4>
                    <p>Partner Organizations</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: PM CARES Fund Contribution */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-hand-holding-heart"></i> 2. Standing Together in Crisis – Contribution to PM-CARES Fund</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>

                <p>The year 2020 began with hope and new plans for community initiatives. However, by March, the world was confronted with the unprecedented challenge of the <strong>COVID-19 pandemic</strong>. The crisis deeply impacted lives, livelihoods, and healthcare systems across the nation.</p>

                <p>In response to this national emergency, the Government of India established the <strong>PM CARES Fund</strong> (Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund) to strengthen relief efforts and support those affected.</p>

                <p>Demonstrating solidarity and social responsibility, the Khinvasara Parivar Trust contributed <strong>₹21,000 to the PM CARES Fund</strong> to support the nation's fight against COVID-19. Even in uncertain times, the Trust remains committed to standing with the country and contributing meaningfully toward collective well-being.</p>

                <div className="water-cooler-feature-image">
                  <div 
                    className="event-image-item featured-single-image"
                    onClick={() => setSelectedImage({ 
                      src: image2020_pmcares, 
                      alt: 'PM CARES Fund Contribution', 
                      caption: 'Khinvasara Parivar Trust\'s contribution to PM CARES Fund during COVID-19 pandemic' 
                    })}
                  >
                    <img 
                      src={image2020_pmcares} 
                      alt="PM CARES Fund Contribution"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <i className="fas fa-search-plus"></i>
                      <p>Contribution to PM CARES Fund</p>
                    </div>
                  </div>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-rupee-sign"></i>
                    <h4>₹21,000</h4>
                    <p>Contribution</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hands-helping"></i>
                    <h4>PM CARES</h4>
                    <p>Fund</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-virus-slash"></i>
                    <h4>COVID-19</h4>
                    <p>Relief Support</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-flag"></i>
                    <h4>National</h4>
                    <p>Solidarity</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Year 2018 */}
        {activeYear === '2018' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2018</span>
              <h3>Solar Electricity Generation</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Environment, Education</span>
            </div>
            <div className="featured-event-content">
              <p>With about 300 clear and sunny days in a year, India has massive potential to drastically reduce dependence on polluting, fossil fuels for energy generation and move to solar power generation. This will be extremely beneficial to the environment and economy of the country. As a small step in this direction, the Khinvasara Parivar Trust decided to help an educational institute reduce their electricity bills by donating a solar power generating system.</p>
              
              <p>Members of the Trust ideated, conceptualised and planned the entire project. On <strong>15th August 2018</strong>, Khinvasara Parivar Trust handed over a "3.25 Kw Solar Power" generating system to <strong>Jeevan Vidya Mandir School, Ghodegaon, Maharashtra</strong>. This project has been executed by Solarich System Pune. Mr. Pranav Shah of Solarich System developed the system and was also present at its inauguration. The total cost of the project is Rs.3 lakhs.</p>
              
              <p>The life of this system is <strong>25 years</strong> and through net metering system will save on the electricity bill of the school. Expected savings annually are approx Rs.45000 for the next 25 years. Along with financial savings, the project will also save approx <strong>2500 trees from being cut down</strong> or <strong>65 tonnes of coal</strong> which would have been used for generating thermal based MSEB electricity.</p>
              
              <p>Through this project, the Khinvasara Parivar Trust has succeeded in helping the school and has also made a solid contribution towards a Clean Environment.</p>

              <p>For the inauguration function held on 15th August, 2018, Khinvasara Family members along with Mrs.Sunanda Kale, Mr. Ajitseth Kale and many other dignitaries were present. This is the first Solar project in area constructed for social institute.</p>

              <div className="event-details-box">
                <h4><i className="fas fa-info-circle"></i> Project Details</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">Jeevan Vidya Mandir School, Ghodegaon</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Power Capacity:</span>
                    <span className="detail-value">3.25 Kw</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Project Cost:</span>
                    <span className="detail-value">₹ 3,00,000</span>
                  </div>
                </div>
              </div>

              <ImageGallery galleryKey="2018" />

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-solar-panel"></i>
                  <h4>3.25 Kw</h4>
                  <p>Power Generation</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rupee-sign"></i>
                  <h4>₹45,000</h4>
                  <p>Annual Savings</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-tree"></i>
                  <h4>2500</h4>
                  <p>Trees Saved</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-clock"></i>
                  <h4>25 Years</h4>
                  <p>System Life</p>
                </div>
              </div>
            </div>
          </div>
        )}

                {/* Year 2016 - ENHANCED */}
        {activeYear === '2016' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2016</span>
              <h3>Rebuilding Hope: Shet Tale Project – Turning Drought into Opportunity</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Social & Environment</span>
            </div>
            <div className="featured-event-content">
              <p>Severe drought conditions in Maharashtra created immense hardship for farmers, leading to crop failures, financial stress, and deep uncertainty. Recognizing that water security is the foundation of sustainable agriculture, Khinvasara Pariwar Trust chose to act with a long-term solution rather than short-term relief.</p>

              <div className="event-details-box">
                <h4><i className="fas fa-water"></i> The Shet Tale Initiative</h4>
                <p>In 2016, the Trust constructed a <strong>Shet Tale (Farm Pond)</strong> in <strong>Arvi village, Beed district</strong> — aimed at ensuring year-round water availability and strengthening farm resilience during drought periods.</p>
              </div>

              <div className="event-details-box">
                <h4><i className="fas fa-info-circle"></i> Project Highlights</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">Shantivan, Arvi Village, Beed Zilla, Maharashtra</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Storage Capacity:</span>
                    <span className="detail-value">88 Lakh Litres</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Project Cost:</span>
                    <span className="detail-value">₹ 2,85,000</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Beneficiary Farmer:</span>
                    <span className="detail-value">Mr. Kakasaheb Shinde</span>
                  </div>
                </div>
              </div>

              <div className="event-details-box">
                <h4><i className="fas fa-hands-helping"></i> Community Support</h4>
                <p>This initiative was successfully executed with the dedicated support of <strong>Mr. Deepak Nagargoje from Shantivan</strong>, whose local coordination played a key role in bringing the project to completion.</p>
              </div>

              <p className="event-quote">The Shet Tale project reflects our belief that <strong>sustainable water solutions empower farmers not just to survive droughts — but to thrive beyond them</strong>.</p>

              <ImageGallery galleryKey="2016-shettale" title="Project Photographs" />

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-water"></i>
                  <h4>88 Lakh</h4>
                  <p>Litres Storage</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rupee-sign"></i>
                  <h4>₹2.85L</h4>
                  <p>Project Cost</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-tractor"></i>
                  <h4>Farming</h4>
                  <p>Resilience</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Arvi, Beed</h4>
                  <p>Location</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2015 */}
        {activeYear === '2015' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2015</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Education & Health</span>
            </div>
            <div className="featured-event-content">
              
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-flask"></i> 1. Science Projects Exhibition for School Students</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>After a very encouraging response received to the science project exhibition conducted by the Trust in Pune in 2014, we decided to expand its reach and take it to Ghodegaon village. Thus, on <strong>22nd January, 2015</strong>, a science project exhibition was held at <strong>Janata Vidya Mandir at Ghodegaon</strong> in collaboration with Shastra Vahini Sanstha, Pune. Mr. Jondhale (प्रशासकीय अधिकारी - Jagtik Radio Durbin) was the chief guest at this event.</p>
                
                <p><strong>Thirty projects</strong> from various streams of science were displayed at this exhibition. A total of <strong>800 students</strong> from standards 5 to 8 visited the exhibition. Volunteers from Shastra Vahini Sanstha explained the projects to the students and enthusiastically answered all their questions. Books were also made available to the students at a concessional rate to help them with building their own science projects.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-microscope"></i>
                    <h4>30</h4>
                    <p>Projects Displayed</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-graduate"></i>
                    <h4>800</h4>
                    <p>Students Attended</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>Std 5-8</h4>
                    <p>Target Group</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 2. Health Camp - Haemoglobin Testing</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>In association with and with full support of the <strong>Sterlite Group</strong>, a haemoglobin check-up camp was organised in Ambavane village, Taluka Velhe, Zilla Pune. Dr. Vijay Pitale and an entire team of technicians travelled from Ahmednagar to help conduct the testing.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Venue:</span>
                      <span className="detail-value">Jeevan Jyoti Mahila Sakshmikaran Kendra, Ambavane village</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Timings:</span>
                      <span className="detail-value">9:00 AM to 3:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <p><strong>300 women and girls</strong> from Ambavane and surrounding villages got their haemoglobin checked at the camp. The team of doctors and technicians explained the results to each individual and suggested any remedial measures. Lunch was provided to everyone by the Trust and everyone who got tested was also given a packet of black dates to help increase their haemoglobin levels.</p>

                <ImageGallery galleryKey="2015" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-female"></i>
                    <h4>300</h4>
                    <p>Women & Girls Tested</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>Dr. Vijay Pitale</h4>
                    <p>Lead Doctor</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake"></i>
                    <h4>Sterlite</h4>
                    <p>Partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

               {/* Year 2014 - ENHANCED */}
        {activeYear === '2014' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2014</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Multi-focus Health Camp - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 1. Health Beyond Boundaries: Multi-Focus Medical Camp</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>Access to quality healthcare should never be limited by geography. At Khinvasara Pariwar Trust, we believe that expert medical care must reach every section of society — especially rural communities where awareness and early diagnosis can make a life-saving difference.</p>

                <p>On <strong>5th June 2014</strong>, the Trust organized a <strong>Multi-Focus Health Camp</strong> at the Primary Healthcare Centre, Dimbhe village near Ghodegaon. This initiative was conducted with the generous support of <strong>Grant Medical Foundation – Ruby Hall Clinic</strong>, one of Pune's most respected healthcare institutions.</p>
                
                <p>The camp focused on screening and awareness in three critical areas:</p>

                <ul className="event-list">
                  <li><i className="fas fa-check-circle"></i> <strong>Heart ailments</strong> (for individuals above 40 years of age)</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Mouth cancer</strong></li>
                  <li><i className="fas fa-check-circle"></i> <strong>Breast cancer</strong></li>
                </ul>

                <p>Under the leadership of <strong>Dr. P. K. Grant</strong>, along with his dedicated medical team, patients were examined and guided with expert advice. Those requiring further treatment were assured access to continued care at subsidized rates at Ruby Hall Clinic, Pune.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Venue:</span>
                      <span className="detail-value">Primary Healthcare Centre, Dimbhe Village</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Timings:</span>
                      <span className="detail-value">9:00 AM to 2:00 PM</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Partner:</span>
                      <span className="detail-value">Grant Medical Foundation – Ruby Hall Clinic, Pune</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Lead Doctor:</span>
                      <span className="detail-value">Dr. P. K. Grant</span>
                    </div>
                  </div>
                </div>

                <ImageGallery galleryKey="2014-health" title="Camp Photographs" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-heart"></i>
                    <h4>3</h4>
                    <p>Focus Areas</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital"></i>
                    <h4>Ruby Hall</h4>
                    <p>Clinic Partnership</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>Dr. P.K. Grant</h4>
                    <p>Lead Doctor</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>Dimbhe</h4>
                    <p>Village</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Science Projects Exhibition - kept with existing content */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-flask"></i> 2. Science Projects Exhibition for School Students</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>Science is considered as one of the tough subjects by students and parents. In addition to that, it is now compulsory in schools to make science projects. The grades given for these projects are considered during science grading. The scientific knowledge provided in school is bookish as implementation of this knowledge is lacking.</p>
                
                <p><strong>"Shastravahini"</strong> is an institution established by Mr. Madhav Khare, whose main aim is to help children do their own projects in model making such as Model aircrafts, Ships, Houses and buildings, Landscapes, Working toys etc.</p>
                
                <p>On above grounds, the Trust decided to conduct scientific exhibition <strong>"How to make Projects"</strong> in association with "Shastravahini" for students, parents and teachers in Pune. The exhibition included various projects in Optics, Equilibrium, Mechanics, Electrical Connections, Oscillations, Geometry, Geography, Aero-modeling, scientific games, Handicraft skills etc.</p>
                
                <p>Exhibition inauguration was done by <strong>Dr. Sanjay Chordia</strong> (Founder and Chairman Suryadatta Management Inst). More than <strong>550 people</strong> visited in two days and found that the exhibition was helpful for them. Many of them have also enrolled for getting trained as Resource person.</p>

                <ImageGallery galleryKey="2014" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>550+</h4>
                    <p>Visitors</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-calendar-day"></i>
                    <h4>2 Days</h4>
                    <p>Duration</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>Multiple</h4>
                    <p>Project Streams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

               {/* Year 2013 - ENHANCED */}
        {activeYear === '2013' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2013</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health, Environment & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Haemoglobin Health Camp - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 1. Strength in Every Drop: Haemoglobin Health Camp for Female Students</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>Good haemoglobin levels are essential for energy, immunity, and overall well-being—especially for adolescent girls and young women. Regular screening and awareness, along with iron-rich nutrition, can prevent anaemia and help build a healthier future.</p>

                <p>With this purpose, Khinvasara Pariwar Trust organised a <strong>Haemoglobin Check-up Health Camp</strong> for girl students of <strong>B. D. Kale College, Ghodegaon</strong> on <strong>12th January 2013</strong>, in association with <strong>Premraj Munot (Nevaskar) Trust, Ahmednagar</strong>.</p>

                <p>The camp aimed to create awareness about the importance of maintaining healthy haemoglobin levels and to provide quick, accessible screening for students. A dedicated medical team from Ahmednagar conducted the tests using modern equipment that delivered results within two minutes, enabling timely guidance and care.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Highlights</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> The inauguration was graced by <strong>Shri. Devendraji Shah</strong>, Chairman & Managing Director, Gowardhan Udyog, along with respected community leaders and educators</li>
                    <li><i className="fas fa-check-circle"></i> Other honorable guests included <strong>Mr. Kailasji Kale</strong> (President, Ambegaon Taluka Vidya Vikas Mandal), <strong>Dr. Vijayji Pitale</strong>, <strong>Mr. Sharadji Munot</strong></li>
                    <li><i className="fas fa-check-circle"></i> The ceremony included Pushpanjali to Swami Vivekananda on his 150th Jayanti, followed by a moment of tribute to the Delhi gang rape victim, reflecting social responsibility and compassion</li>
                    <li><i className="fas fa-check-circle"></i> A team of <strong>6 medical representatives</strong> from Ahmednagar conducted the check-ups</li>
                    <li><i className="fas fa-check-circle"></i> Approximately <strong>300 students</strong> (around 290 girls) and about 25 Khinvasara Pariwar members were screened</li>
                    <li><i className="fas fa-check-circle"></i> Free medicines were provided to those found with low haemoglobin levels</li>
                    <li><i className="fas fa-check-circle"></i> Nutritious <strong>black dates</strong> were distributed to all participants (~300 packets)</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch was arranged for patients and attendees</li>
                  </ul>
                </div>

                <p className="event-quote">This camp reaffirmed our commitment to preventive healthcare and women's well-being—<strong>helping young girls take a confident step toward healthier, stronger lives</strong>.</p>

                <ImageGallery galleryKey="2013-hb" title="Camp Photographs" />
                <ImageGallery galleryKey="2013-hb-media" title="Media Coverage" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>300+</h4>
                    <p>Students Tested</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>6</h4>
                    <p>Medical Representatives</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-female"></i>
                    <h4>~290</h4>
                    <p>Girls Screened</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake"></i>
                    <h4>Premraj Munot</h4>
                    <p>Trust Partnership</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: CFL Bulb Distribution - Talekarwadi - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-lightbulb"></i> 2. Lighting the Path to Sustainability – CFL Distribution Drive</h4>
                <span className="sub-category"><i className="fas fa-leaf"></i> Category: Environment</span>
                
                <p>On <strong>12th January 2013</strong>, the Trust organized a village-wide CFL bulb replacement drive at <strong>Talekarwadi</strong>, located near Ghodegaon. Building on the success of our 2012 initiative, this effort aimed to promote energy conservation and environmental responsibility in rural communities.</p>

                <p><strong>Talekarwadi</strong>, recognized as an <strong>"Adarsh Gram Panchayat"</strong> and appreciated by former President <strong>A. P. J. Abdul Kalam</strong>, was an ideal partner in this mission.</p>

                <p>Around <strong>150 CFL bulbs</strong> were distributed to nearly <strong>50 families</strong>, replacing traditional 40W, 60W, and 100W incandescent bulbs with energy-efficient alternatives. The initiative not only reduced electricity consumption but also strengthened awareness about sustainable living — receiving an encouraging response from the villagers.</p>

                <ImageGallery galleryKey="2013-cfl" title="Event Photographs" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>150</h4>
                    <p>CFL Bulbs Distributed</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-home"></i>
                    <h4>50</h4>
                    <p>Families Benefited</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-award"></i>
                    <h4>Adarsh Gram</h4>
                    <p>Award Winner Village</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 3: Educational Scholarships - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-graduation-cap"></i> 3. Empowering Dreams Through Education – Scholarship Support</h4>
                <span className="sub-category"><i className="fas fa-book"></i> Category: Education</span>
                
                <p>Education is the strongest foundation for a brighter future—especially for deserving students from rural communities who often face financial constraints. Recognizing this need, Khinvasara Parivar Trust reaffirmed its commitment to nurturing young talent through timely educational scholarships.</p>

                <p>On <strong>12th January, 2013</strong>, during the inauguration of the Haemoglobin Check-up Camp at B. D. Kale College, <strong>five meritorious students—four girls and one boy</strong>—were awarded scholarships of <strong>₹2,000 each</strong>. The beneficiaries were carefully selected from a shortlist vetted by the College Principal, based on defined eligibility parameters to ensure support reached the truly deserving.</p>

                <p>This initiative reflects the Trust's strong belief that even modest financial assistance can significantly boost a student's confidence, focus, and academic journey. By encouraging and motivating students through such scholarships, the Trust continues to invest in education as a powerful catalyst for long-term social transformation in rural areas.</p>

                <p className="event-quote"><strong>Every scholarship is not just financial aid—it is a step toward empowering dreams and building a brighter tomorrow.</strong></p>

                <ImageGallery galleryKey="2013-scholarship" title="Scholarship Distribution" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-user-graduate"></i>
                    <h4>5</h4>
                    <p>Students Awarded</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-rupee-sign"></i>
                    <h4>₹2,000</h4>
                    <p>Per Student</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-female"></i>
                    <h4>4 Girls</h4>
                    <p>Empowered</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 4: CFL Bulb Distribution - Ugalewadi - kept */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-lightbulb"></i> 4. CFL Bulb Distribution - Ugalewadi</h4>
                <span className="sub-category"><i className="fas fa-leaf"></i> Category: Environment</span>
                
                <p>Continuing with our mission to help the environment, the Trust had organised an event to replace the incandescent bulbs of a village with CFL bulbs on <strong>22nd September, 2013</strong>. A total of <strong>180 bulbs</strong> were replaced with CFLs in the village of <strong>Ugalewadi, near Shinoli</strong>.</p>
                
                <p>The Trust received a lot of help from B. D. Kale College, Ghodegaon in conducting this event successfully. Besides the members of the trust, other prominent personalities present at the event included Prof. Jadhav (Principal - B.D.Kale College), Mr. Shankarbhai Shah (a respected businessman from Shinoli), Mr. Borhade and Ugale Guruji.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>180</h4>
                    <p>Bulbs Replaced</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>Ugalewadi</h4>
                    <p>Village</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

                {/* Year 2012 - ENHANCED */}
        {activeYear === '2012' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2012</span>
              <h3>Lighting Up Lives: Saving Energy, Empowering a Village</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Environment</span>
            </div>
            <div className="featured-event-content">
              <p>In today's high energy-demand world, every small step towards conservation creates a meaningful impact. Simple habits like using energy-efficient lighting not only reduce electricity bills but also help cut harmful emissions from coal-based power generation—contributing to a cleaner and healthier environment.</p>
              
              <p>With this vision, Khinvasara Pariwar Trust organized a <strong>CFL Bulb Distribution Drive</strong> on <strong>27th May 2012</strong> in <strong>Dhakale village, Maharashtra</strong>, under its Environment & Social focus. Compact Fluorescent Lamps (CFLs) consume nearly <strong>75% less energy</strong> than regular incandescent bulbs—where a 20-watt CFL provides light equivalent to a 75-watt bulb—making them an effective and affordable solution for rural households.</p>
              
              <p>To ensure meaningful impact, a <strong>detailed household energy survey</strong> was conducted in advance by students of B.D. Kale College along with Trust members. On the day of the event, over <strong>200 incandescent bulbs</strong> were replaced with CFLs across the village, helping families reduce energy consumption and monthly electricity costs.</p>
              
              <p>The initiative received wholehearted support from the villagers and was graced by <strong>Mrs. Anita Nighot</strong> (Head, Ghodegaon Panchayat Samiti), <strong>Mr. Bansode</strong> (Electricity Board Representative), and <strong>Mrs. Dangate</strong> (Sarpanch, Dhakale Village). Officials from the regional electricity board appreciated the initiative and encouraged the Trust to continue its efforts in promoting sustainable practices.</p>
              
              <p>The Trust was ably supported by <strong>Prof. Jadhav</strong>, Principal of B.D. Kale College, and his students, whose active involvement made this initiative impactful and memorable.</p>

              <p className="event-quote">This initiative stands as a reminder that <strong>real change begins at the grassroots—one home, one bulb, one village at a time</strong>.</p>

              <ImageGallery galleryKey="2012-cfl" title="Event Photographs" />
              <ImageGallery galleryKey="2012-media" title="Media Coverage" />

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-lightbulb"></i>
                  <h4>200+</h4>
                  <p>Bulbs Replaced</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-bolt"></i>
                  <h4>75%</h4>
                  <p>Energy Savings</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Dhakale</h4>
                  <p>Village</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-handshake"></i>
                  <h4>B.D. Kale</h4>
                  <p>College Support</p>
                </div>
              </div>
            </div>
          </div>
        )}

                {/* Year 2011 - ENHANCED */}
        {activeYear === '2011' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2011</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health, Education & Infrastructure</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Orthopedic Health Camp - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-bone"></i> 1. Healing Steps Forward: Orthopedic Health Camp</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>On <strong>14th May 2011</strong>, a significant step was taken towards strengthening rural healthcare access through a dedicated <strong>Orthopedic Health Camp</strong> at the B.D. Kale College campus, Ghodegaon. Organized in association with <strong>Sancheti Hospital, Pune</strong>, the camp aimed to provide expert orthopedic diagnosis and treatment to rural communities who often have limited access to specialized medical care.</p>

                <p>The camp was inaugurated by <strong>Dilip Walse Patil</strong>, Speaker of the Maharashtra State Assembly. The ceremonial Deep Prajwalan was graciously performed by <strong>Padma Vibhushan K. H. Sancheti</strong>, whose lifelong dedication to orthopedic excellence has transformed countless lives.</p>

                <p>The event was honored by the presence of <strong>Shri Arun Gire</strong> (Vice President, Pune Zilla Parishad), <strong>Shri Jaisingh Kale</strong> (Trustee, Ambegaon Taluka Vidya Vikas Mandal) and also <strong>Prof. Indrajit Jadhav</strong> (Principal, B.D. Kale College).</p>

                <p>A committed medical team comprising <strong>4 resident doctors, 2 consultants, 4 physiotherapists</strong>, along with Dr. K. H. Sancheti himself, offered expert consultations and guidance. A <strong>Bone Density (BDM) Machine</strong> facility was made available through the support of a pharmaceutical partner, enabling advanced screening services rarely accessible in rural setups.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-chart-bar"></i> Camp Impact Highlights</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> <strong>262 patients</strong> registered and received consultations</li>
                    <li><i className="fas fa-check-circle"></i> Participation from Ghodegaon and nearby villages</li>
                    <li><i className="fas fa-check-circle"></i> Free medicines distributed with support from leading pharmaceutical companies (Mankind, Apex, Emcure etc.)</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch arranged for all patients</li>
                  </ul>
                </div>

                <p className="event-quote">This initiative reaffirmed our Trust's commitment to bridging the healthcare gap between urban expertise and rural needs. By bringing specialized orthopedic care directly to the grassroots level, the camp not only addressed immediate medical concerns but also <strong>raised awareness about bone health and preventive care</strong>.</p>

                <ImageGallery galleryKey="2011-ortho" title="Camp Photographs" />
                <ImageGallery galleryKey="2011-ortho-media" title="Media Coverage" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>262</h4>
                    <p>Patients Registered</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>10+</h4>
                    <p>Medical Staff</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital"></i>
                    <h4>Sancheti</h4>
                    <p>Hospital Partnership</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-x-ray"></i>
                    <h4>BDM</h4>
                    <p>Bone Density Screening</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Science Projects Exhibition - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-flask"></i> 2. Igniting Young Minds: Science Projects Exhibition</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>Science is often seen as a difficult subject, with learning largely confined to textbooks. At the same time, science projects play an important role in academic evaluation. Recognizing the need for practical, hands-on learning, our Trust organized a two-day exhibition in 2011 titled <strong>"How to Make Projects"</strong> in association with <strong>Shastravahini</strong>, founded by Mr. Madhav Khare.</p>

                <p>The exhibition in Pune guided students, parents, and teachers on how to conceptualize and build their own science models—ranging from aircrafts and ships to working toys and mechanical structures. Projects across <strong>Optics, Mechanics, Electrical Connections, Geometry, Aero-modeling</strong>, and more were demonstrated with a focus on practical understanding.</p>

                <p>The event was inaugurated by <strong>Dr. Sanjay Chordia</strong>, Founder and Chairman of Suryadatta Management Institute.</p>

                <p>Over <strong>550 visitors</strong> attended over two days, and the response was highly encouraging. Many participants expressed renewed interest in science, with several enrolling for further training as resource persons.</p>

                <p className="event-quote">Through this initiative, the Trust strengthened its commitment to <strong>nurturing scientific curiosity, creativity, and confidence</strong> among young learners.</p>

                <ImageGallery galleryKey="2011-science" title="Exhibition Photographs" />

                <a href={jainParamparaPDF} target="_blank" rel="noopener noreferrer" className="gratitude-document">
                  <i className="fas fa-file-pdf"></i> View Trust News in Jain Parampara
                </a>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>550+</h4>
                    <p>Visitors</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-calendar-day"></i>
                    <h4>2 Days</h4>
                    <p>Duration</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-cogs"></i>
                    <h4>Multiple</h4>
                    <p>Project Streams</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake"></i>
                    <h4>Shastravahini</h4>
                    <p>Partner</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 3: E-Library Furniture Donation - kept */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-book-reader"></i> 3. Donation – Furniture for College E-Library</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>B.D. Kale College, one of important part of the Health camps organized by Khinvasara Pariwar Trust, was sanctioned an <strong>'E-Library'</strong> in their school and college. It was main aim of the school to provide students access to 'E-Books'. Not only this, to provide access to variety of information through internet.</p>
                
                <p>For successful implementation of this, there was need of creating basic infrastructure like internet connection, furniture, computers, cabins etc. Trust helped them by way of <strong>providing furniture for 'E-Library'</strong>.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-couch"></i>
                    <h4>Furniture</h4>
                    <p>Donated</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-laptop"></i>
                    <h4>E-Library</h4>
                    <p>Infrastructure</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2010 - ENHANCED */}
        {activeYear === '2010' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2010</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Dental and Oral Health Camp - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-tooth"></i> 1. Smiles of Hope – Free Dental & Oral Health Camp</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>Under our Health Initiative, Khinvasara Trust organized a <strong>Free Dental and Oral Health Camp</strong> on <strong>2nd May 2010</strong> at Ghodegaon, with a strong commitment to reaching rural and underprivileged communities.</p>
                
                <p>In many villages, limited access to advanced dental care and high tobacco consumption increase the risk of serious oral diseases among both men and women. Recognizing this urgent need, the Trust brought expert medical care directly to the people—ensuring timely diagnosis, treatment, and awareness.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Highlights of the Camp</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Over <strong>315 patients</strong> across all age groups were examined</li>
                    <li><i className="fas fa-check-circle"></i> A dedicated team of <strong>10 dental professionals</strong>, led by <strong>Dr. Anjali Gandhi, Dr. Rajendra Gandhi</strong>, and <strong>Dr. Sangita</strong>, provided careful and compassionate care</li>
                    <li><i className="fas fa-check-circle"></i> An informative lecture and slide presentation on oral hygiene and disease prevention helped spread awareness among attendees</li>
                    <li><i className="fas fa-check-circle"></i> More than <strong>40 dental extractions</strong> were performed on the spot</li>
                    <li><i className="fas fa-check-circle"></i> <strong>180 patients</strong> requiring advanced care were referred to Pune for further treatment by Dr. Anjali Gandhi, Dr. Rajendra Gandhi, and Poona Hospital</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch was provided to all patients</li>
                    <li><i className="fas fa-check-circle"></i> The camp was inaugurated by <strong>Dilip Walse Patil</strong>, Member of the Maharashtra State Assembly, whose presence encouraged community participation</li>
                  </ul>
                </div>

                <p className="event-quote">The overwhelming response and heartfelt appreciation from villagers reaffirmed our belief that quality healthcare must reach every corner of society. Through this initiative, we didn't just treat dental issues—<strong>we restored confidence, awareness, and countless smiles</strong>.</p>

                <ImageGallery galleryKey="2010-dental" title="Camp Photographs" />
                <ImageGallery galleryKey="2010-media" title="Media Coverage" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>315+</h4>
                    <p>Patients Examined</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital-user"></i>
                    <h4>180</h4>
                    <p>Referrals to Pune</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-tooth"></i>
                    <h4>40+</h4>
                    <p>Extractions Done</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>10</h4>
                    <p>Medical Team</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Donation to College – Benches - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-chair"></i> 2. Supporting Education Infrastructure – Donation of Benches</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>In 2010, the Trust proudly extended its support to <strong>B. D. Kale College at Ghodegaon</strong>, which had been sanctioned a <strong>B.C.S. degree</strong> program. To facilitate the new course, the college required 20 computer tables for its students.</p>
                
                <p>As a gesture of gratitude for the space and support provided by the college during our Dental Camp initiative, and in alignment with the Trust's core objective of promoting education, we donated <strong>10 benches</strong> to strengthen their infrastructure.</p>

                <p>This contribution aimed to enhance the learning environment and empower students with better facilities for digital education — reinforcing our commitment to advancing education in rural communities.</p>

                <ImageGallery galleryKey="2010-bench" title="Donation & Appreciation" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-desktop"></i>
                    <h4>10</h4>
                    <p>Benches Donated</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-graduation-cap"></i>
                    <h4>B.C.S.</h4>
                    <p>Degree Support</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2009 - ENHANCED */}
        {activeYear === '2009' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2009</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Health Camp – Diabetes and Heart Diseases - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 1. Healing Hearts, Protecting Lives – Mega Diabetes & Cardiac Health Camp</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>In 2009, recognizing that many rural patients were unaware of diabetes and heart disease until advanced stages, the Khinvasara Parivar Trust took proactive steps to address this gap. A <strong>Free Diabetes and Heart Disease Health Camp</strong> was organized on <strong>3rd May 2009</strong> at Ghodegaon, in collaboration with <strong>Anandrishiji Hospital, Ahmadnagar</strong>.</p>
                
                <p><strong>The response was overwhelming.</strong></p>
                
                <p>More than <strong>360 patients</strong> from various villages were examined free of cost. Comprehensive testing included:</p>

                <ul className="event-list">
                  <li><i className="fas fa-check-circle"></i> Blood Sugar Check</li>
                  <li><i className="fas fa-check-circle"></i> ECG</li>
                  <li><i className="fas fa-check-circle"></i> General Medical Examination</li>
                  <li><i className="fas fa-check-circle"></i> 2D Echo (for over <strong>70 patients</strong> who required further evaluation)</li>
                </ul>

                <p>Critical cases were referred to Anandrishiji Hospital for advanced procedures such as angiography, angioplasty, bypass surgery, and other necessary treatments — all arranged at highly subsidized and affordable rates, inclusive of medication.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-rupee-sign"></i> Subsidized Treatment Rates at Anandrishiji Hospital</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Bypass Surgery:</span>
                      <span className="detail-value">₹ 45,000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Angioplasty:</span>
                      <span className="detail-value">₹ 50,000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">BMV:</span>
                      <span className="detail-value">₹ 12,000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Angiography:</span>
                      <span className="detail-value">₹ 4,000</span>
                    </div>
                  </div>
                  <p><em>All charges inclusive of all medication</em></p>
                </div>

                <div className="event-details-box">
                  <h4><i className="fas fa-star"></i> Distinguished Presence & Expert Care</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Camp was inaugurated by <strong>Dilip Walse Patil</strong>, Maharashtra State Finance Minister</li>
                    <li><i className="fas fa-check-circle"></i> Closing ceremony was graced by <strong>Shivajirao Patil</strong>, along with several local dignitaries</li>
                    <li><i className="fas fa-check-circle"></i> A dedicated team of <strong>25 doctors, nurses, and healthcare professionals</strong> from Anandrishiji Hospital provided compassionate care</li>
                    <li><i className="fas fa-check-circle"></i> Leading specialists including cardiologists, cardiac surgeons, physicians, and anesthetists volunteered their expertise — Dr. Sandeep Tadas (Cardiac Surgeon), Dr. Abhijit Pathak (Cardiologist), Dr. Vasant Katariya, and many more</li>
                    <li><i className="fas fa-check-circle"></i> Advanced medical equipment ensured accurate diagnosis</li>
                    <li><i className="fas fa-check-circle"></i> Awareness lectures on diabetes and heart disease prevention were conducted to educate the community</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch offered to all patients</li>
                  </ul>
                </div>

                <div className="event-details-box">
                  <h4><i className="fas fa-chart-bar"></i> Impact of the Camp</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Patients ranged from infants (<strong>6 months old</strong>) to senior citizens <strong>above 80 years</strong></li>
                    <li><i className="fas fa-check-circle"></i> Participants came from Khed, Junner, Manchar, Nimdole, Panse, Kurkundi, and many nearby villages</li>
                    <li><i className="fas fa-check-circle"></i> Over <strong>60 serious cases</strong> were referred for further treatment</li>
                    <li><i className="fas fa-check-circle"></i> Widely appreciated by local communities and covered by leading newspapers such as <strong>Lokmat, Kesari, and Sakal</strong></li>
                  </ul>
                </div>

                <p>The event was organized at <strong>B.D. Kale College campus</strong> with full support from the staff, and free meals were provided to all attendees.</p>

                <ImageGallery galleryKey="2009-health" title="Camp Photographs & Media Coverage" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>360+</h4>
                    <p>Patients Examined</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>25</h4>
                    <p>Medical Staff</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital-user"></i>
                    <h4>60+</h4>
                    <p>Serious Referrals</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-heart"></i>
                    <h4>70</h4>
                    <p>2D Echo Tests</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Water Cooler Donation - ENHANCED */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-tint"></i> 2. A Small Step, A Healthier Campus</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education & Health</span>
                
                <p>Access to clean drinking water is fundamental to student health and learning. During our 2009 health camp at <strong>B.D. Kale College, Ghodegaon</strong>—the only college in the area—the lack of safe drinking water emerged as a serious challenge.</p>

                <p>At the time of organizing the Health camp, the absence of pure drinking water was a major hurdle. This was also highlighted by the principal in his speech while pointing out that the students suffer a lot because of the impure water. Students and staff had no access to clean, safe water on campus—putting their health at risk daily.</p>

                <p>Responding to this need, our Trust <strong>donated and installed a water cooler</strong> for students and staff at the college building. This simple but meaningful step ensured access to clean, safe water, reduced the risk of waterborne infections, and supported everyday wellbeing—because <strong>better health enables better education</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Initiative Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Beneficiary:</span>
                      <span className="detail-value">B.D. Kale College, Ghodegaon</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Donation:</span>
                      <span className="detail-value">Water Cooler with Purification</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Impact:</span>
                      <span className="detail-value">Clean drinking water for all students & staff</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Purpose:</span>
                      <span className="detail-value">Reduce waterborne infections & support student health</span>
                    </div>
                  </div>
                </div>

                <div className="water-cooler-feature-image">
                  <div 
                    className="event-image-item featured-single-image"
                    onClick={() => setSelectedImage({ 
                      src: image2009_watercooler, 
                      alt: 'Water Cooler at B.D. Kale College', 
                      caption: 'Water cooler installed at B.D. Kale College, Ghodegaon — ensuring clean drinking water for students and staff' 
                    })}
                  >
                    <img 
                      src={image2009_watercooler} 
                      alt="Water Cooler installed at B.D. Kale College"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <i className="fas fa-search-plus"></i>
                      <p>Water cooler installed at B.D. Kale College</p>
                    </div>
                  </div>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-tint"></i>
                    <h4>Clean Water</h4>
                    <p>Access Ensured</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-shield-alt"></i>
                    <h4>Reduced</h4>
                    <p>Infection Risk</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-heartbeat"></i>
                    <h4>Health</h4>
                    <p>Enables Education</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Year 2008 */}
        {activeYear === '2008' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2008</span>
              <h3>First Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Community Service & Education</span>
            </div>
            <div className="featured-event-content">
              
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-seedling"></i> 1. Food Grain Donation</h4>
                <span className="sub-category"><i className="fas fa-hands-helping"></i> Category: Community Service</span>
                
                <p><strong>St. John's Home for Women and Children</strong>, located at 808, Guruwar Peth, Panchhaud, Pune- 411042 is constituted for the purpose of rehabilitation of children and women. Its Licence number is 110, under the "Women's and Children's Maintenance Act".</p>
                
                <p>It is run by <strong>"Society of St. Mary The Virgin In India"</strong> with Public Trust Registration no as "F-1881 (Pune). It houses orphans and handicapped children, children of separated couples, sex workers and elderly people among others. The institution runs not only an old age home but also a school for these orphan children.</p>
                
                <p>After studying the way it is run and their difficulties and requirements, the Trust decided to donate <strong>food grains sufficient for one month requirement</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Beneficiary Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Organization:</span>
                      <span className="detail-value">St. John's Home for Women and Children</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">808, Guruwar Peth, Panchhaud, Pune- 411042</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Run By:</span>
                      <span className="detail-value">Society of St. Mary The Virgin In India</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Donation:</span>
                      <span className="detail-value">Food grains for 1 month</span>
                    </div>
                  </div>
                </div>

                <ImageGallery galleryKey="2008" />

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-wheat-awn"></i>
                    <h4>1 Month</h4>
                    <p>Food Grains Supply</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-home"></i>
                    <h4>St. John's</h4>
                    <p>Home for Women & Children</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hands-helping"></i>
                    <h4>Rehabilitation</h4>
                    <p>Support</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-chair"></i> 2. Chair Donation</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p><strong>"Jeevan Shikshan Mandir"</strong> is a school located at Ghodegaon, Tal- Ambegaon, Maharashtra. At the time of discussion with principal of the school, it was brought to our notice that the school library was devoid of chairs causing inconvenience to students.</p>
                
                <p>To ensure that students have a library environment conducive to studying, the Trust decided to <strong>donate chairs to the school library</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Beneficiary Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">School:</span>
                      <span className="detail-value">Jeevan Shikshan Mandir</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">Ghodegaon, Tal- Ambegaon, Maharashtra</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Donation:</span>
                      <span className="detail-value">Chairs for School Library</span>
                    </div>
                  </div>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-chair"></i>
                    <h4>Chairs</h4>
                    <p>Donated</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-book-open"></i>
                    <h4>Library</h4>
                    <p>Infrastructure</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>Jeevan Shikshan</h4>
                    <p>Mandir School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Image Modal */}
      <ImageModal />
      
      {/* Add styles for the gallery */}
      <style>{`
        .event-gallery {
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--light);
          border-radius: 12px;
        }

        .gallery-title {
          font-size: 1.2rem;
          color: var(--dark);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .event-images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }

        .event-image-item {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          background: var(--border);
        }

        .event-image-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .event-image-item:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .event-image-item:hover .image-overlay {
          opacity: 1;
        }

        .image-overlay i {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .image-overlay p {
          color: white;
          font-size: 0.85rem;
          text-align: center;
          margin: 0;
        }

        .image-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .image-modal-content img {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: rotate(90deg);
        }

        .image-caption {
          color: white;
          text-align: center;
          margin-top: 1rem;
          font-size: 1rem;
        }

        .year-has-images {
          font-size: 0.6rem;
          margin-left: 0.3rem;
          color: var(--secondary);
        }

        /* Featured single image for water cooler */
        .water-cooler-feature-image {
          display: flex;
          justify-content: center;
          margin: 1.5rem 0;
        }

        .featured-single-image {
          max-width: 500px;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          border: 3px solid var(--primary);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .featured-single-image:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }

        /* Quote style for impactful statements */
        .event-quote {
          background: linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%);
          border-left: 4px solid var(--primary);
          padding: 1.25rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 0 12px 12px 0;
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--dark);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .event-images-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
          
          .modal-close-btn {
            top: 10px;
            right: 10px;
          }

          .featured-single-image {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;