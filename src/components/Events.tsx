import { useEffect, useState } from 'react';

// ============================================================
// IMAGE IMPORTS
// ============================================================
// 2008
const image2008_001 = '/2008/001.jpg';
const image2008_002 = '/2008/002.jpg';
const image2008_003 = '/2008/003.jpg';
// 2009
const image2009_watercooler = '/2009/001 2009 Water cooler.jpg';
const image2009_002 = '/2009MedicalCamp/002.jpg';
const image2009_003 = '/2009MedicalCamp/003.jpg';
const image2009_004 = '/2009MedicalCamp/004.jpg';
const image2009_006 = '/2009MedicalCamp/006.jpg';
const image2009_lokmat = '/2009MedicalCamp/Lokmat_B.gif';
// 2010 Dental
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
// 2010 Bench
const image2010_thanks = '/2010Benchesdonation/Thanking Letter.jpg';
const image2010_aug_snap1 = '/2010Benchesdonation/15th Aug Snap 1.jpg';
const image2010_aug_snap2 = '/2010Benchesdonation/15th Aug Snap 2.jpg';
// 2011 Ortho
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
// 2011 Science
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
// 2012 CFL
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
// 2013 CFL
const image2013_cfl_001 = '/2013CFL/001.JPG';
const image2013_cfl_002 = '/2013CFL/002.JPG';
const image2013_cfl_003 = '/2013CFL/003.JPG';
const image2013_cfl_004 = '/2013CFL/004.JPG';
const image2013_cfl_005 = '/2013CFL/005.JPG';
const image2013_cfl_006 = '/2013CFL/006.JPG';
const image2013_cfl_007 = '/2013CFL/007.JPG';
const image2013_cfl_009 = '/2013CFL/009.JPG';
const image2013_cfl_010 = '/2013CFL/010.JPG';
// 2013 Hb
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
// 2013 Scholarship
const image2013_sch_001 = '/2013Scholarship/001.jpg';
const image2013_sch_002 = '/2013Scholarship/002.jpg';
const image2013_sch_003 = '/2013Scholarship/003.jpg';
const image2013_sch_004 = '/2013Scholarship/004.jpg';
// 2014 Health
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
// 2016 ShetTale
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
// 2018
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
// 2020
const image2020_pmcares = '/2020PMCares/image152.jpg';
const image2020_001 = '/2020/001 Umed Parivar.jpg';
const image2020_002 = '/2020/002 Transformer.jpg';
const image2020_003 = '/2020/003 Transformer .jpg';
const image2020_004 = '/2020/004 Members at Umed Parivar.jpg';
const image2020_005 = '/2020/005 Review meeting.jpg';
const image2020_006 = '/2020/006 Members with Umed team.jpg';
const image2020_007 = '/2020/007 Family Memebers 2.jpg';
const image2020_thanks = '/2020/Thanks.jpg';
// 2021
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
// 2023
const image2023_001 = '/2023/001.jpg';
const image2023_002 = '/2023/002.jpg';
const image2023_003 = '/2023/003.jpg';
const image2023_004 = '/2023/004.jpg';
const image2023_005 = '/2023/005.jpg';
const image2023_thanks = '/2023/Thanks note.jpg';
// 2025
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

// ============================================================
// TYPE DEFINITIONS
// ============================================================
interface Photo { src: string; alt: string; caption: string; }
interface Stat  { icon: string; value: string; label: string; }
interface DetailItem { label: string; value: string; }
interface InfoBox {
  title: string;
  icon: string;
  items?: string[];
  details?: DetailItem[];
  text?: string;
  link?: { href: string; label: string };
}
interface Initiative {
  id: string;
  title: string;
  category: string;
  categoryIcon: string;
  date: string;
  description: string[];
  quote?: string;
  infoBoxes?: InfoBox[];
  photos?: Photo[];
  mediaPhotos?: Photo[];
  stats: Stat[];
  featuredPhoto?: Photo;
  pdfLink?: { href: string; label: string };
}
interface YearEntry {
  year: string;
  label: string;
  initiatives: Initiative[];
}

// ============================================================
// DATA
// ============================================================
const TIMELINE: YearEntry[] = [
  // ── 2025 ─────────────────────────────────────────────────
  {
    year: '2025',
    label: '2025',
    initiatives: [
      {
        id: '2025-trees',
        title: 'Tree Plantation Drive at Village Vetale',
        category: 'Environment',
        categoryIcon: 'fas fa-leaf',
        date: '22nd June 2025',
        description: [
          'On <strong>22nd June 2025</strong>, a tree plantation drive was organized by <strong>Khinvasara Pariwar Trust in collaboration with the 14Trees Foundation</strong> at the serene Village Vetale. The event was truly heartwarming and impactful.',
          'With enthusiastic participation from all family members of all ages and the inspiring support of the passionate 14Trees volunteers, the event beautifully blended purpose and joy. From scenic hikes to hands-on tree planting, it was a day filled with nature, bonding, and shared commitment to our environment. All the saplings planted will be maintained by the foundation for years to come.',
          'This initiative aligns with our Trust\'s key focus on environmental responsibility towards mother earth.',
        ],
        infoBoxes: [
          {
            title: 'About 14Trees Foundation',
            icon: 'fas fa-info-circle',
            text: '14 Trees Foundation is building a sustainable, carbon-footprint-neutral ecosystem through re-forestation. The foundation is restoring native green cover on ecologically degraded patches of barren hills near Pune.',
            link: { href: 'https://www.14trees.org/', label: 'Visit 14Trees Foundation' },
          },
        ],
        pdfLink: { href: thanksPDF2025, label: 'View Thanks Note & Gratitude' },
        photos: [
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
        stats: [
          { icon: 'fas fa-tree',          value: 'Tree Planting', label: 'Environmental Initiative' },
          { icon: 'fas fa-users',          value: 'All Ages',      label: 'Family Participation' },
          { icon: 'fas fa-map-marker-alt', value: 'Vetale',        label: 'Village' },
          { icon: 'fas fa-handshake',      value: '14Trees',       label: 'Partner' },
        ],
      },
    ],
  },

  // ── 2023 ─────────────────────────────────────────────────
  {
    year: '2023',
    label: '2023',
    initiatives: [
      {
        id: '2023-digital',
        title: 'Bringing Digital Learning to Rural Classrooms',
        category: 'Education',
        categoryIcon: 'fas fa-graduation-cap',
        date: 'December 2023',
        description: [
          '<strong>Empowering students at Lalbahadur Shastri Vidyalay, Amondi with e-learning tools so potential meets opportunity.</strong>',
          'With our Education focus area, the Khinvasara Family Trust has enabled the installation of a Digital E-Learning Kit for students of 8th to 10th standard at the school located in Ambegaon Taluka in <strong>Dec 2023</strong>.',
          'Being a remote school, it faces ongoing challenges such as limited availability of teachers and restricted access to new-age technology in education. Despite these constraints, the students show strong potential and a genuine eagerness to learn. With the introduction of digital e-learning modules, students now have improved access to visual, interactive learning that supports better understanding of core subjects and concepts.',
          'The project was successfully implemented by <strong>Sumconcepts Technologies, Pune</strong>, through their established education enablement offering under Compkin.',
          'This initiative reflects our commitment to bridging the digital edge and creating equal learning opportunities for students in rural remote areas—helping bright young minds shine through access to modern education tools.',
        ],
        photos: [
          { src: image2023_001, alt: 'Digital Learning Initiative',  caption: 'Digital Learning to Rural Classrooms' },
          { src: image2023_002, alt: 'Classroom Setup',              caption: 'Setting up digital infrastructure' },
          { src: image2023_003, alt: 'Student Learning',             caption: 'Students engaging with digital content' },
          { src: image2023_004, alt: 'Educational Program',          caption: 'Educational program in progress' },
          { src: image2023_005, alt: 'Community Participation',      caption: 'Community members participating' },
          { src: image2023_thanks, alt: 'Thanks Note',               caption: 'Appreciation and gratitude' },
        ],
        stats: [
          { icon: 'fas fa-laptop',         value: 'E-Learning Kit', label: 'Digital Tools' },
          { icon: 'fas fa-graduation-cap', value: '8-10',           label: 'Standards' },
          { icon: 'fas fa-map-marker-alt', value: 'Ambegaon',       label: 'Taluka' },
          { icon: 'fas fa-handshake',      value: 'Sumconcepts',    label: 'Partner' },
        ],
      },
    ],
  },

  // ── 2021 ─────────────────────────────────────────────────
  {
    year: '2021',
    label: '2021',
    initiatives: [
      {
        id: '2021-vaccination',
        title: 'Umed Pariwar – COVID Vaccination Drives',
        category: 'Health',
        categoryIcon: 'fas fa-heartbeat',
        date: '24th July 2021 & 23rd October 2021',
        description: [
          'The COVID-19 pandemic has demonstrated the interconnected nature of our world – and that no one is safe until everyone is safe. The pandemic has been one of the greatest health crises in recorded history.',
          'Intellectually Development Disable people are an integral part of our society and in current situation Covid-19 vaccination of these members is equally important. It is important that the vaccination is done in their comfort zone through on location vaccination drive.',
          '<strong>Khinvasara Pariwar Trust in association with Pune Municipal Corporation (PMC)</strong> carried out a vaccination drive at Umed Pariwar Wadki for first and second dose of Covishield vaccine. It was PMC\'s first on site vaccination drive out of Pune municipal boundary.',
          'The drive was conducted on <strong>24th July 2021</strong> for the first dose and on <strong>23rd October 2021</strong> for the second dose. More than 34 team members of Umed Pariwar along with their staff have been vaccinated successfully.',
        ],
        photos: [
          { src: image2021_001, alt: 'Vaccination Drive 2021',   caption: 'COVID-19 Vaccination Initiative' },
          { src: image2021_002, alt: 'Vaccination Process',      caption: 'Medical team conducting vaccination' },
          { src: image2021_003, alt: 'Beneficiaries',            caption: 'Beneficiaries receiving vaccine' },
          { src: image2021_004, alt: 'Healthcare Workers',       caption: 'Healthcare professionals at work' },
          { src: image2021_005, alt: 'Vaccination Camp',         caption: 'Vaccination camp setup' },
          { src: image2021_006, alt: 'Documentation',            caption: 'Recording vaccination details' },
          { src: image2021_007, alt: 'Medical Team',             caption: 'Medical team coordination' },
          { src: image2021_008, alt: 'Vaccination Progress',     caption: 'Progress of vaccination drive' },
          { src: image2021_009, alt: 'Community Care',           caption: 'Community care initiatives' },
          { src: image2021_010, alt: 'Health Awareness',         caption: 'Health awareness programs' },
          { src: image2021_011, alt: 'Second Dose Drive',        caption: 'Second dose vaccination drive' },
          { src: image2021_012, alt: 'Vaccination Completion',   caption: 'Completing vaccination process' },
          { src: image2021_013, alt: 'Post-Vaccination',         caption: 'Post-vaccination care and monitoring' },
          { src: image2021_014, alt: 'Success Milestone',        caption: 'Successful completion milestone' },
          { src: image2021_015, alt: 'Certificate Distribution', caption: 'Certificate distribution ceremony' },
        ],
        stats: [
          { icon: 'fas fa-syringe',        value: '34+', label: 'People Vaccinated' },
          { icon: 'fas fa-calendar-check', value: '2',   label: 'Vaccination Drives' },
          { icon: 'fas fa-hospital',       value: 'PMC', label: 'Partnership' },
        ],
      },
    ],
  },

  // ── 2020 ─────────────────────────────────────────────────
  {
    year: '2020',
    label: '2020',
    initiatives: [
      {
        id: '2020-electricity',
        title: 'Umed Pariwar – Electricity Infrastructure',
        category: 'Health',
        categoryIcon: 'fas fa-bolt',
        date: 'Q1 2020',
        description: [
          'Umed Pariwar is an organization working for the rehabilitation of Intellectually Development Disable persons. It has a well-equipped residential facility in Wadki-Hadapsar – close to Pune.',
          'A major challenge faced by the organization was erratic power supply. The single-phase power supply made equipment like water pumps unusable. On approaching MSEDCL, they were asked to install a transformer and power line at their own cost, approximately Rs 7 Lakhs.',
          'To help Umed Pariwar, <strong>Khinvasara Pariwar Trust in association with Mahati Powerlines and M/s G.V Lele</strong> supplied and installed 200 KVA Transformer and HT equipment.',
        ],
        photos: [
          { src: image2020_001, alt: 'Umed Pariwar Meeting',    caption: 'Meeting at Umed Pariwar' },
          { src: image2020_002, alt: 'Transformer Installation', caption: 'Transformer installation project' },
          { src: image2020_003, alt: 'Transformer Setup',        caption: 'Setting up electrical transformer' },
          { src: image2020_004, alt: 'Members at Umed Pariwar', caption: 'Members gathering at Umed Pariwar' },
          { src: image2020_005, alt: 'Review Meeting',           caption: 'Review meeting with team members' },
          { src: image2020_006, alt: 'Members with Umed Team',  caption: 'Members collaborating with Umed team' },
          { src: image2020_007, alt: 'Family Members',           caption: 'Family members participation' },
          { src: image2020_thanks, alt: 'Thanks Note',           caption: 'Appreciation and thanks' },
        ],
        stats: [
          { icon: 'fas fa-bolt',       value: '200 KVA',  label: 'Transformer Capacity' },
          { icon: 'fas fa-rupee-sign', value: '₹7 Lakhs', label: 'Project Cost' },
          { icon: 'fas fa-handshake',  value: '3',         label: 'Partner Organizations' },
        ],
      },
      {
        id: '2020-pmcares',
        title: 'Standing Together in Crisis – Contribution to PM-CARES Fund',
        category: 'Health',
        categoryIcon: 'fas fa-hand-holding-heart',
        date: '2020',
        description: [
          'The year 2020 began with hope and new plans. However, by March, the world was confronted with the unprecedented challenge of the <strong>COVID-19 pandemic</strong>.',
          'In response, the Government of India established the <strong>PM CARES Fund</strong>. Demonstrating solidarity and social responsibility, the Khinvasara Pariwar Trust contributed <strong>₹21,000 to the PM CARES Fund</strong> to support the nation\'s fight against COVID-19.',
        ],
        featuredPhoto: {
          src: image2020_pmcares,
          alt: 'PM CARES Fund Contribution',
          caption: 'Khinvasara Pariwar Trust\'s contribution to PM CARES Fund during COVID-19',
        },
        stats: [
          { icon: 'fas fa-rupee-sign',    value: '₹21,000',  label: 'Contribution' },
          { icon: 'fas fa-hands-helping', value: 'PM CARES', label: 'Fund' },
          { icon: 'fas fa-virus-slash',   value: 'COVID-19', label: 'Relief Support' },
          { icon: 'fas fa-flag',          value: 'National', label: 'Solidarity' },
        ],
      },
    ],
  },

  // ── 2018 ─────────────────────────────────────────────────
  {
    year: '2018',
    label: '2018',
    initiatives: [
      {
        id: '2018-solar',
        title: 'Solar Electricity Generation',
        category: 'Environment & Education',
        categoryIcon: 'fas fa-solar-panel',
        date: '15th August 2018',
        description: [
          'With about 300 clear and sunny days a year, India has massive potential to reduce dependence on fossil fuels. As a small step in this direction, the Khinvasara Pariwar Trust decided to help an educational institute reduce their electricity bills by donating a solar power generating system.',
          'On <strong>15th August 2018</strong>, Khinvasara Pariwar Trust handed over a "3.25 Kw Solar Power" generating system to <strong>Jeevan Vidya Mandir School, Ghodegaon, Maharashtra</strong>. This project was executed by Solarich System Pune. The total cost of the project is Rs. 3 lakhs.',
          'The life of this system is <strong>25 years</strong> and through net metering will save on the electricity bill of the school. Expected annual savings are approx Rs. 45,000. Along with financial savings, the project will also save approx <strong>2500 trees from being cut down</strong> or <strong>65 tonnes of coal</strong> which would have been used for generating thermal-based MSEB electricity.',
        ],
        infoBoxes: [
          {
            title: 'Project Details',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'Location',       value: 'Jeevan Vidya Mandir School, Ghodegaon' },
              { label: 'Power Capacity', value: '3.25 Kw' },
              { label: 'Project Cost',   value: '₹ 3,00,000' },
            ],
          },
        ],
        photos: [
          { src: image2018_003, alt: 'Event 2018',     caption: 'Community event 2018' },
          { src: image2018_01,  alt: 'Event 2018 01',  caption: 'Event activity' },
          { src: image2018_014, alt: 'Event 2018 014', caption: 'Team gathering' },
          { src: image2018_017, alt: 'Event 2018 017', caption: 'Public participation' },
          { src: image2018_021, alt: 'Event 2018 021', caption: 'Program execution' },
          { src: image2018_022, alt: 'Event 2018 022', caption: 'Community involvement' },
          { src: image2018_02b, alt: 'Event 2018 02b', caption: 'Event highlights' },
          { src: image2018_02c, alt: 'Event 2018 02c', caption: 'Active engagement' },
          { src: image2018_03,  alt: 'Event 2018 03',  caption: 'Participants in action' },
          { src: image2018_06,  alt: 'Event 2018 06',  caption: 'Successful initiative' },
          { src: image2018_08,  alt: 'Event 2018 08',  caption: 'Community support' },
          { src: image2018_09,  alt: 'Event 2018 09',  caption: 'Event milestone' },
          { src: image2018_kesari,  alt: 'Kesari Media Coverage',  caption: 'Media coverage – Kesari' },
          { src: image2018_pudhari, alt: 'Pudhari Media Coverage', caption: 'Media coverage – Pudhari' },
        ],
        stats: [
          { icon: 'fas fa-solar-panel', value: '3.25 Kw', label: 'Power Generation' },
          { icon: 'fas fa-rupee-sign',  value: '₹45,000', label: 'Annual Savings' },
          { icon: 'fas fa-tree',        value: '2500',     label: 'Trees Saved' },
          { icon: 'fas fa-clock',       value: '25 Years', label: 'System Life' },
        ],
      },
    ],
  },

  // ── 2016 ─────────────────────────────────────────────────
  {
    year: '2016',
    label: '2016',
    initiatives: [
      {
        id: '2016-shettale',
        title: 'Rebuilding Hope: Shet Tale Project',
        category: 'Social & Environment',
        categoryIcon: 'fas fa-water',
        date: '2016',
        description: [
          'Severe drought conditions in Maharashtra created immense hardship for farmers. Recognizing that water security is the foundation of sustainable agriculture, Khinvasara Pariwar Trust chose to act with a long-term solution.',
          'In 2016, the Trust constructed a <strong>Shet Tale (Farm Pond)</strong> in <strong>Arvi village, Beed district</strong> — aimed at ensuring year-round water availability and strengthening farm resilience during drought periods.',
        ],
        quote: 'The Shet Tale project reflects our belief that <strong>sustainable water solutions empower farmers not just to survive droughts — but to thrive beyond them</strong>.',
        infoBoxes: [
          {
            title: 'Project Highlights',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'Location',           value: 'Shantivan, Arvi Village, Beed Zilla, Maharashtra' },
              { label: 'Storage Capacity',   value: '88 Lakh Litres' },
              { label: 'Project Cost',       value: '₹ 2,85,000' },
              { label: 'Beneficiary Farmer', value: 'Mr. Kakasaheb Shinde' },
            ],
          },
          {
            title: 'Community Support',
            icon: 'fas fa-hands-helping',
            text: 'This initiative was successfully executed with the dedicated support of <strong>Mr. Deepak Nagargoje from Shantivan</strong>, whose local coordination played a key role.',
          },
        ],
        photos: [
          { src: image2016_001,  alt: 'Shet Tale Project',        caption: 'Shet Tale construction site' },
          { src: image2016_002,  alt: 'Excavation work',          caption: 'Excavation work in progress' },
          { src: image2016_003,  alt: 'Farm pond digging',        caption: 'Farm pond digging' },
          { src: image2016_004,  alt: 'Construction progress',    caption: 'Construction progress' },
          { src: image2016_004b, alt: 'Construction progress',    caption: 'Construction progress' },
          { src: image2016_004c, alt: 'Construction progress',    caption: 'Construction progress' },
          { src: image2016_004d, alt: 'Construction progress',    caption: 'Construction progress' },
          { src: image2016_004e, alt: 'Construction progress',    caption: 'Construction progress' },
          { src: image2016_005,  alt: 'Site overview',            caption: 'Aerial view of the site' },
          { src: image2016_007,  alt: 'Pond formation',           caption: 'Pond formation taking shape' },
          { src: image2016_009,  alt: 'Water storage area',       caption: 'Water storage area preparation' },
          { src: image2016_010,  alt: 'Community involvement',    caption: 'Community involvement in project' },
          { src: image2016_011,  alt: 'Construction milestone',   caption: 'Construction milestone achieved' },
          { src: image2016_002a, alt: 'Construction progress',    caption: 'Construction progress' },
          { src: image2016_013,  alt: 'Landscape transformation', caption: 'Landscape transformation' },
          { src: image2016_014,  alt: 'Water collection area',    caption: 'Water collection area' },
          { src: image2016_015,  alt: 'Project site',             caption: 'Project site at Shantivan' },
          { src: image2016_016,  alt: 'Farm surroundings',        caption: 'Farm surroundings and terrain' },
          { src: image2016_017,  alt: 'Completed structure',      caption: 'Completed pond structure' },
          { src: image2016_018,  alt: 'Water retention',          caption: 'Water retention capability' },
          { src: image2016_019,  alt: 'Beneficiary farm',         caption: 'Beneficiary farm area' },
          { src: image2016_020,  alt: 'Drought solution',         caption: 'A solution against drought' },
          { src: image2016_021,  alt: 'Agricultural support',     caption: 'Supporting agricultural needs' },
        ],
        stats: [
          { icon: 'fas fa-water',          value: '88 Lakh',    label: 'Litres Storage' },
          { icon: 'fas fa-rupee-sign',      value: '₹2.85L',     label: 'Project Cost' },
          { icon: 'fas fa-tractor',         value: 'Farming',    label: 'Resilience' },
          { icon: 'fas fa-map-marker-alt',  value: 'Arvi, Beed', label: 'Location' },
        ],
      },
    ],
  },

  // ── 2015 ─────────────────────────────────────────────────
  {
    year: '2015',
    label: '2015',
    initiatives: [
      {
        id: '2015-science',
        title: 'Science Projects Exhibition for School Students',
        category: 'Education',
        categoryIcon: 'fas fa-flask',
        date: '22nd January 2015',
        description: [
          'After a very encouraging response to the 2014 science project exhibition in Pune, we decided to expand its reach and take it to Ghodegaon village. On <strong>22nd January, 2015</strong>, a science project exhibition was held at <strong>Janata Vidya Mandir at Ghodegaon</strong> in collaboration with Shastra Vahini Sanstha, Pune.',
          '<strong>Thirty projects</strong> from various streams of science were displayed. A total of <strong>800 students</strong> from standards 5 to 8 visited the exhibition. Volunteers from Shastra Vahini Sanstha explained the projects to the students and enthusiastically answered all their questions.',
        ],
        stats: [
          { icon: 'fas fa-microscope',    value: '30',      label: 'Projects Displayed' },
          { icon: 'fas fa-user-graduate', value: '800',     label: 'Students Attended' },
          { icon: 'fas fa-school',        value: 'Std 5-8', label: 'Target Group' },
        ],
      },
      {
        id: '2015-hb',
        title: 'Health Camp – Haemoglobin Testing',
        category: 'Health',
        categoryIcon: 'fas fa-heartbeat',
        date: '2015',
        description: [
          'In association with and with full support of the <strong>Sterlite Group</strong>, a haemoglobin check-up camp was organised in Ambavane village, Taluka Velhe, Zilla Pune. Dr. Vijay Pitale and an entire team of technicians travelled from Ahmednagar to help conduct the testing.',
          '<strong>300 women and girls</strong> from Ambavane and surrounding villages got their haemoglobin checked at the camp. The team explained results to each individual and suggested remedial measures. Lunch was provided to everyone, and participants were given a packet of black dates to help increase their haemoglobin levels.',
        ],
        infoBoxes: [
          {
            title: 'Camp Details',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'Venue',   value: 'Jeevan Jyoti Mahila Sakshmikaran Kendra, Ambavane village' },
              { label: 'Timings', value: '9:00 AM to 3:00 PM' },
            ],
          },
        ],
        stats: [
          { icon: 'fas fa-female',    value: '300',             label: 'Women & Girls Tested' },
          { icon: 'fas fa-user-md',   value: 'Dr. Vijay Pitale', label: 'Lead Doctor' },
          { icon: 'fas fa-handshake', value: 'Sterlite',        label: 'Partnership' },
        ],
      },
    ],
  },

  // ── 2014 ─────────────────────────────────────────────────
  {
    year: '2014',
    label: '2014',
    initiatives: [
      {
        id: '2014-health',
        title: 'Health Beyond Boundaries: Multi-Focus Medical Camp',
        category: 'Health',
        categoryIcon: 'fas fa-heartbeat',
        date: '5th June 2014',
        description: [
          'Access to quality healthcare should never be limited by geography. On <strong>5th June 2014</strong>, the Trust organized a <strong>Multi-Focus Health Camp</strong> at the Primary Healthcare Centre, Dimbhe village near Ghodegaon, with the support of <strong>Grant Medical Foundation – Ruby Hall Clinic</strong>.',
          'The camp focused on screening in three critical areas: <strong>Heart ailments</strong> (for individuals above 40 years), <strong>Mouth cancer</strong>, and <strong>Breast cancer</strong>.',
          'Under the leadership of <strong>Dr. P. K. Grant</strong>, patients were examined and guided with expert advice. Those requiring further treatment were assured access to continued care at subsidized rates at Ruby Hall Clinic, Pune.',
        ],
        infoBoxes: [
          {
            title: 'Camp Details',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'Venue',       value: 'Primary Healthcare Centre, Dimbhe Village' },
              { label: 'Timings',     value: '9:00 AM to 2:00 PM' },
              { label: 'Partner',     value: 'Grant Medical Foundation – Ruby Hall Clinic, Pune' },
              { label: 'Lead Doctor', value: 'Dr. P. K. Grant' },
            ],
          },
        ],
        photos: [
          { src: image2014_health_001, alt: 'Health Camp 2014',        caption: 'Multi-focus health camp at Dimbhe' },
          { src: image2014_health_002, alt: 'Patient screening',       caption: 'Patient screening in progress' },
          { src: image2014_health_003, alt: 'Medical examination',     caption: 'Medical examination by specialists' },
          { src: image2014_health_004, alt: 'Heart screening',         caption: 'Heart ailment screening' },
          { src: image2014_health_005, alt: 'Cancer awareness',        caption: 'Cancer awareness and screening' },
          { src: image2014_health_006, alt: 'Dr. P.K. Grant',          caption: 'Dr. P.K. Grant examining patients' },
          { src: image2014_health_007, alt: 'Patient consultation',    caption: 'Expert consultation with patients' },
          { src: image2014_health_008, alt: 'Camp activities',         caption: 'Health camp activities' },
          { src: image2014_health_009, alt: 'Community participation', caption: 'Community members at the camp' },
          { src: image2014_health_010, alt: 'Camp coordination',       caption: 'Camp coordination and management' },
          { src: image2014_health_011, alt: 'Medical team',            caption: 'Ruby Hall Clinic medical team' },
          { src: image2014_health_012, alt: 'Patient care',            caption: 'Compassionate patient care' },
          { src: image2014_health_013, alt: 'Health awareness',        caption: 'Health awareness session' },
          { src: image2014_health_014, alt: 'Camp overview',           caption: 'Overview of the health camp' },
        ],
        stats: [
          { icon: 'fas fa-heart',          value: '3',              label: 'Focus Areas' },
          { icon: 'fas fa-hospital',       value: 'Ruby Hall',      label: 'Clinic Partnership' },
          { icon: 'fas fa-user-md',        value: 'Dr. P.K. Grant', label: 'Lead Doctor' },
          { icon: 'fas fa-map-marker-alt', value: 'Dimbhe',         label: 'Village' },
        ],
      },
      {
        id: '2014-science',
        title: 'Science Projects Exhibition for School Students',
        category: 'Education',
        categoryIcon: 'fas fa-flask',
        date: '2014',
        description: [
          'Science is considered one of the tough subjects by students and parents. In addition, it is now compulsory in schools to make science projects. <strong>"Shastravahini"</strong> is an institution established by Mr. Madhav Khare, whose main aim is to help children do their own projects in model making.',
          'The Trust decided to conduct a scientific exhibition <strong>"How to Make Projects"</strong> in association with "Shastravahini" for students, parents and teachers in Pune. The exhibition included projects in Optics, Equilibrium, Mechanics, Electrical Connections, Oscillations, Geometry, Aero-modeling, and more.',
          'Exhibition inauguration was done by <strong>Dr. Sanjay Chordia</strong> (Founder and Chairman, Suryadatta Management Inst). More than <strong>550 people</strong> visited over two days.',
        ],
        stats: [
          { icon: 'fas fa-users',        value: '550+',     label: 'Visitors' },
          { icon: 'fas fa-calendar-day', value: '2 Days',   label: 'Duration' },
          { icon: 'fas fa-lightbulb',    value: 'Multiple', label: 'Project Streams' },
        ],
      },
    ],
  },

  // ── 2013 ─────────────────────────────────────────────────
  {
    year: '2013',
    label: '2013',
    initiatives: [
      {
        id: '2013-hb',
        title: 'Strength in Every Drop: Haemoglobin Health Camp',
        category: 'Health',
        categoryIcon: 'fas fa-heartbeat',
        date: '12th January 2013',
        description: [
          'Khinvasara Pariwar Trust organised a <strong>Haemoglobin Check-up Health Camp</strong> for girl students of <strong>B. D. Kale College, Ghodegaon</strong> on <strong>12th January 2013</strong>, in association with <strong>Premraj Munot (Nevaskar) Trust, Ahmednagar</strong>.',
          'A dedicated medical team from Ahmednagar conducted the tests using modern equipment that delivered results within two minutes, enabling timely guidance and care.',
        ],
        quote: 'This camp reaffirmed our commitment to preventive healthcare and women\'s well-being—<strong>helping young girls take a confident step toward healthier, stronger lives</strong>.',
        infoBoxes: [
          {
            title: 'Camp Highlights',
            icon: 'fas fa-info-circle',
            items: [
              'Inauguration graced by <strong>Shri. Devendraji Shah</strong>, Chairman & Managing Director, Gowardhan Udyog',
              'A team of <strong>6 medical representatives</strong> from Ahmednagar conducted the check-ups',
              'Approximately <strong>300 students</strong> (~290 girls) and about 25 Khinvasara Pariwar members were screened',
              'Free medicines provided to those found with low haemoglobin levels',
              'Nutritious <strong>black dates</strong> distributed to all participants (~300 packets)',
              'Free lunch arranged for patients and attendees',
            ],
          },
        ],
        photos: [
          { src: image2013_hb_001,  alt: 'Haemoglobin Camp 2013', caption: 'Haemoglobin check-up camp' },
          { src: image2013_hb_002,  alt: 'Medical team',           caption: 'Medical team at the camp' },
          { src: image2013_hb_003,  alt: 'Patient registration',   caption: 'Patient registration process' },
          { src: image2013_hb_004,  alt: 'Blood sample collection',caption: 'Collecting blood samples' },
          { src: image2013_hb_005,  alt: 'Testing process',        caption: 'Testing haemoglobin levels' },
          { src: image2013_hb_005a, alt: 'Testing 5a',             caption: 'Testing process – Step 1' },
          { src: image2013_hb_005b, alt: 'Testing 5b',             caption: 'Testing process – Step 2' },
          { src: image2013_hb_005c, alt: 'Testing 5c',             caption: 'Testing process – Step 3' },
          { src: image2013_hb_006,  alt: 'Health awareness',       caption: 'Health awareness session' },
          { src: image2013_hb_007,  alt: 'Patient consultation',   caption: 'Consultation based on results' },
          { src: image2013_hb_009,  alt: 'Community participation',caption: 'Community members participating' },
          { src: image2013_hb_010,  alt: 'Haemoglobin Camp 2013', caption: 'Haemoglobin check-up camp' },
          { src: image2013_hb_011,  alt: 'Student screening',      caption: 'Girl students being screened' },
          { src: image2013_hb_012,  alt: 'Medical testing',        caption: 'Medical team conducting tests' },
          { src: image2013_hb_013,  alt: 'Health awareness',       caption: 'Health awareness session' },
          { src: image2013_hb_014,  alt: 'Results guidance',       caption: 'Providing guidance on results' },
          { src: image2013_hb_015,  alt: 'Camp activities',        caption: 'Camp activities and care' },
        ],
        mediaPhotos: [
          { src: image2013_hb_lokmat, alt: 'Lokmat Coverage', caption: 'Media coverage – Lokmat newspaper' },
        ],
        stats: [
          { icon: 'fas fa-users',     value: '300+',          label: 'Students Tested' },
          { icon: 'fas fa-user-md',   value: '6',             label: 'Medical Representatives' },
          { icon: 'fas fa-female',    value: '~290',          label: 'Girls Screened' },
          { icon: 'fas fa-handshake', value: 'Premraj Munot', label: 'Trust Partnership' },
        ],
      },
      {
        id: '2013-cfl-talekarwadi',
        title: 'Lighting the Path – CFL Distribution at Talekarwadi',
        category: 'Environment',
        categoryIcon: 'fas fa-lightbulb',
        date: '12th January 2013',
        description: [
          'On <strong>12th January 2013</strong>, the Trust organized a village-wide CFL bulb replacement drive at <strong>Talekarwadi</strong>, near Ghodegaon. <strong>Talekarwadi</strong>, recognized as an <strong>"Adarsh Gram Panchayat"</strong> and appreciated by former President <strong>A. P. J. Abdul Kalam</strong>, was an ideal partner in this mission.',
          'Around <strong>150 CFL bulbs</strong> were distributed to nearly <strong>50 families</strong>, replacing traditional 40W, 60W, and 100W incandescent bulbs with energy-efficient alternatives.',
        ],
        photos: [
          { src: image2013_cfl_001, alt: 'CFL Distribution Talekarwadi', caption: 'CFL drive at Talekarwadi village' },
          { src: image2013_cfl_002, alt: 'Bulb distribution',             caption: 'Distributing CFL bulbs to families' },
          { src: image2013_cfl_003, alt: 'Village engagement',            caption: 'Engaging with Talekarwadi residents' },
          { src: image2013_cfl_004, alt: 'Energy conservation',           caption: 'Promoting energy conservation' },
          { src: image2013_cfl_005, alt: 'Family receiving bulbs',        caption: 'Family receiving CFL replacements' },
          { src: image2013_cfl_006, alt: 'Community support',             caption: 'Wholehearted community support' },
          { src: image2013_cfl_007, alt: 'Adarsh Gram village',           caption: 'Adarsh Gram Panchayat village' },
          { src: image2013_cfl_009, alt: 'Event highlights',              caption: 'Drive highlights' },
          { src: image2013_cfl_010, alt: 'Successful initiative',         caption: 'Successful environmental initiative' },
        ],
        stats: [
          { icon: 'fas fa-lightbulb', value: '150',         label: 'CFL Bulbs Distributed' },
          { icon: 'fas fa-home',      value: '50',          label: 'Families Benefited' },
          { icon: 'fas fa-award',     value: 'Adarsh Gram', label: 'Award Winner Village' },
        ],
      },
      {
        id: '2013-scholarship',
        title: 'Empowering Dreams – Scholarship Support',
        category: 'Education',
        categoryIcon: 'fas fa-graduation-cap',
        date: '12th January 2013',
        description: [
          'On <strong>12th January, 2013</strong>, during the inauguration of the Haemoglobin Check-up Camp at B. D. Kale College, <strong>five meritorious students — four girls and one boy</strong> — were awarded scholarships of <strong>₹2,000 each</strong>. The beneficiaries were carefully selected from a shortlist vetted by the College Principal.',
        ],
        quote: '<strong>Every scholarship is not just financial aid — it is a step toward empowering dreams and building a brighter tomorrow.</strong>',
        photos: [
          { src: image2013_sch_001, alt: 'Scholarship Distribution',     caption: 'Scholarship award ceremony' },
          { src: image2013_sch_002, alt: 'Student receiving scholarship', caption: 'Meritorious student receiving scholarship' },
          { src: image2013_sch_003, alt: 'Award ceremony',               caption: 'Students at the award ceremony' },
          { src: image2013_sch_004, alt: 'Scholarship recipients',       caption: 'Recipients with Trust members' },
        ],
        stats: [
          { icon: 'fas fa-user-graduate', value: '5',        label: 'Students Awarded' },
          { icon: 'fas fa-rupee-sign',    value: '₹2,000',   label: 'Per Student' },
          { icon: 'fas fa-female',        value: '4 Girls',  label: 'Empowered' },
          { icon: 'fas fa-school',        value: 'B.D. Kale', label: 'College' },
        ],
      },
      {
        id: '2013-cfl-ugalewadi',
        title: 'CFL Bulb Distribution – Ugalewadi',
        category: 'Environment',
        categoryIcon: 'fas fa-lightbulb',
        date: '22nd September 2013',
        description: [
          'Continuing with our mission to help the environment, the Trust organized an event to replace incandescent bulbs with CFL bulbs on <strong>22nd September, 2013</strong>. A total of <strong>180 bulbs</strong> were replaced in the village of <strong>Ugalewadi, near Shinoli</strong>.',
          'The Trust received a lot of help from B. D. Kale College, Ghodegaon in conducting this event successfully.',
        ],
        stats: [
          { icon: 'fas fa-lightbulb',      value: '180',       label: 'Bulbs Replaced' },
          { icon: 'fas fa-map-marker-alt', value: 'Ugalewadi', label: 'Village' },
        ],
      },
    ],
  },

  // ── 2012 ─────────────────────────────────────────────────
  {
    year: '2012',
    label: '2012',
    initiatives: [
      {
        id: '2012-cfl',
        title: 'Lighting Up Lives: CFL Drive at Dhakale Village',
        category: 'Environment',
        categoryIcon: 'fas fa-lightbulb',
        date: '27th May 2012',
        description: [
          'Khinvasara Pariwar Trust organized a <strong>CFL Bulb Distribution Drive</strong> on <strong>27th May 2012</strong> in <strong>Dhakale village, Maharashtra</strong>. CFLs consume nearly <strong>75% less energy</strong> than regular incandescent bulbs — making them an effective and affordable solution for rural households.',
          'A <strong>detailed household energy survey</strong> was conducted in advance by students of B.D. Kale College along with Trust members. On the day of the event, over <strong>200 incandescent bulbs</strong> were replaced with CFLs across the village.',
          'The initiative received wholehearted support from the villagers and was graced by <strong>Mrs. Anita Nighot</strong> (Head, Ghodegaon Panchayat Samiti), <strong>Mr. Bansode</strong> (Electricity Board Representative), and <strong>Mrs. Dangate</strong> (Sarpanch, Dhakale Village).',
        ],
        quote: 'This initiative stands as a reminder that <strong>real change begins at the grassroots — one home, one bulb, one village at a time</strong>.',
        photos: [
          { src: image2012_001, alt: 'CFL Distribution 2012',   caption: 'CFL distribution drive at Dhakale' },
          { src: image2012_002, alt: 'Village engagement',       caption: 'Engaging with Dhakale villagers' },
          { src: image2012_003, alt: 'Bulb replacement',         caption: 'Replacing incandescent bulbs with CFLs' },
          { src: image2012_004, alt: 'Household survey',         caption: 'Energy survey findings' },
          { src: image2012_005, alt: 'Distribution in progress', caption: 'CFL distribution in progress' },
          { src: image2012_006, alt: 'Community participation',  caption: 'Community members participating' },
          { src: image2012_007, alt: 'Family receiving CFLs',    caption: 'Family receiving CFL bulbs' },
          { src: image2012_008, alt: 'Trust members',            caption: 'Trust members at the drive' },
          { src: image2012_009, alt: 'Village coverage',         caption: 'Covering the entire village' },
          { src: image2012_010, alt: 'Energy awareness',         caption: 'Energy conservation awareness' },
          { src: image2012_011, alt: 'Dignitaries present',      caption: 'Dignitaries at the event' },
          { src: image2012_012, alt: 'Installation help',        caption: 'Helping with CFL installation' },
          { src: image2012_013, alt: 'Student volunteers',       caption: 'B.D. Kale College student volunteers' },
          { src: image2012_014, alt: 'Event coordination',       caption: 'Event coordination' },
          { src: image2012_015, alt: 'Villager appreciation',    caption: 'Villagers appreciating the initiative' },
          { src: image2012_016, alt: 'Successful drive',         caption: 'Successful completion of the drive' },
          { src: image2012_017, alt: 'Group photo',              caption: 'Group photo with participants' },
        ],
        mediaPhotos: [
          { src: image2012_sakal, alt: 'Sakal Media Coverage', caption: 'Media coverage – Sakal newspaper' },
        ],
        stats: [
          { icon: 'fas fa-lightbulb',      value: '200+',     label: 'Bulbs Replaced' },
          { icon: 'fas fa-bolt',           value: '75%',      label: 'Energy Savings' },
          { icon: 'fas fa-map-marker-alt', value: 'Dhakale',  label: 'Village' },
          { icon: 'fas fa-handshake',      value: 'B.D. Kale', label: 'College Support' },
        ],
      },
    ],
  },

  // ── 2011 ─────────────────────────────────────────────────
  {
    year: '2011',
    label: '2011',
    initiatives: [
      {
        id: '2011-ortho',
        title: 'Healing Steps Forward: Orthopedic Health Camp',
        category: 'Health',
        categoryIcon: 'fas fa-bone',
        date: '14th May 2011',
        description: [
          'On <strong>14th May 2011</strong>, a significant <strong>Orthopedic Health Camp</strong> was organized at the B.D. Kale College campus, Ghodegaon, in association with <strong>Sancheti Hospital, Pune</strong>.',
          'The camp was inaugurated by <strong>Dilip Walse Patil</strong>, Speaker of the Maharashtra State Assembly. The ceremonial Deep Prajwalan was performed by <strong>Padma Vibhushan K. H. Sancheti</strong>.',
          'A committed medical team comprising <strong>4 resident doctors, 2 consultants, 4 physiotherapists</strong> along with Dr. K. H. Sancheti offered expert consultations. A <strong>Bone Density (BDM) Machine</strong> facility was made available, enabling advanced screening rarely accessible in rural setups.',
        ],
        quote: 'This initiative reaffirmed our Trust\'s commitment to bridging the healthcare gap between urban expertise and rural needs.',
        infoBoxes: [
          {
            title: 'Camp Impact Highlights',
            icon: 'fas fa-chart-bar',
            items: [
              '<strong>262 patients</strong> registered and received consultations',
              'Participation from Ghodegaon and nearby villages',
              'Free medicines distributed with support from Mankind, Apex, Emcure etc.',
              'Free lunch arranged for all patients',
            ],
          },
        ],
        photos: [
          { src: image2011_ortho_001, alt: 'Orthopedic Camp Inauguration', caption: 'Camp inauguration ceremony' },
          { src: image2011_ortho_002, alt: 'Dilip Walse Patil',            caption: 'Inauguration by Speaker Dilip Walse Patil' },
          { src: image2011_ortho_003, alt: 'Dr. K.H. Sancheti',            caption: 'Padma Vibhushan Dr. K.H. Sancheti at the camp' },
          { src: image2011_ortho_004, alt: 'Patient consultation',          caption: 'Doctor consulting with patient' },
          { src: image2011_ortho_005, alt: 'Orthopedic examination',        caption: 'Orthopedic examination in progress' },
          { src: image2011_ortho_006, alt: 'BDM screening',                 caption: 'Bone Density Machine screening' },
          { src: image2011_ortho_007, alt: 'Medical team',                  caption: 'Medical team providing care' },
          { src: image2011_ortho_008, alt: 'Patient registration',          caption: 'Patient registration at the camp' },
          { src: image2011_ortho_009, alt: 'Physiotherapy session',         caption: 'Physiotherapy consultation' },
          { src: image2011_ortho_010, alt: 'Camp activities',               caption: 'Camp activities in progress' },
          { src: image2011_ortho_011, alt: 'Patient care',                  caption: 'Compassionate patient care' },
          { src: image2011_ortho_012, alt: 'Expert consultation',           caption: 'Expert orthopedic consultation' },
          { src: image2011_ortho_013, alt: 'Community participation',       caption: 'Community members at the camp' },
          { src: image2011_ortho_014, alt: 'Treatment guidance',            caption: 'Treatment guidance and advice' },
          { src: image2011_ortho_015, alt: 'Medicine distribution',         caption: 'Free medicine distribution' },
          { src: image2011_ortho_016, alt: 'Camp overview',                 caption: 'Overview of the health camp' },
          { src: image2011_ortho_017, alt: 'Dignitaries present',           caption: 'Dignitaries at the camp' },
          { src: image2011_ortho_018, alt: 'Patient examination',           caption: 'Patient being examined' },
          { src: image2011_ortho_019, alt: 'Camp coordination',             caption: 'Camp coordination and management' },
          { src: image2011_ortho_020, alt: 'Successful camp',               caption: 'Successful camp moments' },
          { src: image2011_ortho_021, alt: 'Group photo',                   caption: 'Group photo of team and participants' },
        ],
        mediaPhotos: [
          { src: image2011_ortho_prabhat, alt: 'Prabhat Media Coverage', caption: 'Media coverage – Prabhat newspaper' },
        ],
        stats: [
          { icon: 'fas fa-users',    value: '262',      label: 'Patients Registered' },
          { icon: 'fas fa-user-md',  value: '10+',      label: 'Medical Staff' },
          { icon: 'fas fa-hospital', value: 'Sancheti', label: 'Hospital Partnership' },
          { icon: 'fas fa-x-ray',    value: 'BDM',      label: 'Bone Density Screening' },
        ],
      },
      {
        id: '2011-science',
        title: 'Igniting Young Minds: Science Projects Exhibition',
        category: 'Education',
        categoryIcon: 'fas fa-flask',
        date: '2011',
        description: [
          'Our Trust organized a two-day exhibition titled <strong>"How to Make Projects"</strong> in association with <strong>Shastravahini</strong>, founded by Mr. Madhav Khare.',
          'The exhibition guided students, parents, and teachers on how to conceptualize and build their own science models. Projects across <strong>Optics, Mechanics, Electrical Connections, Geometry, Aero-modeling</strong>, and more were demonstrated.',
          'The event was inaugurated by <strong>Dr. Sanjay Chordia</strong>, Founder and Chairman of Suryadatta Management Institute. Over <strong>550 visitors</strong> attended over two days.',
        ],
        quote: 'Through this initiative, the Trust strengthened its commitment to <strong>nurturing scientific curiosity, creativity, and confidence</strong> among young learners.',
        pdfLink: { href: jainParamparaPDF, label: 'View Trust News in Jain Parampara' },
        photos: [
          { src: image2011_sci_001,  alt: 'Science Exhibition 2011', caption: 'Science Projects Exhibition' },
          { src: image2011_sci_002,  alt: 'Project display',          caption: 'Science project on display' },
          { src: image2011_sci_003,  alt: 'Student engagement',       caption: 'Students engaging with projects' },
          { src: image2011_sci_004,  alt: 'Optics project',           caption: 'Optics demonstration' },
          { src: image2011_sci_005,  alt: 'Mechanics model',          caption: 'Mechanics model display' },
          { src: image2011_sci_006,  alt: 'Aero-modeling',            caption: 'Aero-modeling demonstration' },
          { src: image2011_sci_007,  alt: 'Exhibition visitors',      caption: 'Visitors exploring exhibits' },
          { src: image2011_sci_008,  alt: 'Electrical projects',      caption: 'Electrical connections project' },
          { src: image2011_sci_009,  alt: 'Interactive learning',     caption: 'Interactive learning session' },
          { src: image2011_sci_010,  alt: 'Student participation',    caption: 'Students participating actively' },
          { src: image2011_sci_011,  alt: 'Exhibition highlights',    caption: 'Exhibition highlights' },
          { src: image2011_sci_012,  alt: 'Geometry models',          caption: 'Geometry and geography models' },
          { src: image2011_sci_013,  alt: 'Hands-on learning',        caption: 'Hands-on science learning' },
          { src: image2011_sci_014,  alt: 'Project explanation',      caption: 'Volunteers explaining projects' },
          { src: image2011_sci_015,  alt: 'Scientific games',         caption: 'Scientific games and activities' },
          { src: image2011_sci_016,  alt: 'Handicraft skills',        caption: 'Handicraft skills demonstration' },
          { src: image2011_sci_017,  alt: 'Exhibition crowd',         caption: 'Enthusiastic crowd at exhibition' },
          { src: image2011_sci_018,  alt: 'Closing ceremony',         caption: 'Exhibition closing ceremony' },
          { src: image2011_sci_4909, alt: 'Exhibition moment 1',      caption: 'Exhibition highlights' },
          { src: image2011_sci_4910, alt: 'Exhibition moment 2',      caption: 'Science in action' },
          { src: image2011_sci_4911, alt: 'Exhibition moment 3',      caption: 'Young minds at work' },
          { src: image2011_sci_4912, alt: 'Exhibition moment 4',      caption: 'Inspiring curiosity' },
        ],
        stats: [
          { icon: 'fas fa-users',        value: '550+',         label: 'Visitors' },
          { icon: 'fas fa-calendar-day', value: '2 Days',        label: 'Duration' },
          { icon: 'fas fa-cogs',         value: 'Multiple',      label: 'Project Streams' },
          { icon: 'fas fa-handshake',    value: 'Shastravahini', label: 'Partner' },
        ],
      },
      {
        id: '2011-library',
        title: 'Donation – Furniture for College E-Library',
        category: 'Education',
        categoryIcon: 'fas fa-book-reader',
        date: '2011',
        description: [
          'B.D. Kale College was sanctioned an <strong>E-Library</strong> to provide students access to E-Books and internet resources. To help create the basic infrastructure, the Trust helped by <strong>providing furniture for the E-Library</strong>.',
        ],
        stats: [
          { icon: 'fas fa-couch',  value: 'Furniture', label: 'Donated' },
          { icon: 'fas fa-laptop', value: 'E-Library', label: 'Infrastructure' },
          { icon: 'fas fa-school', value: 'B.D. Kale', label: 'College' },
        ],
      },
    ],
  },

  // ── 2010 ─────────────────────────────────────────────────
  {
    year: '2010',
    label: '2010',
    initiatives: [
      {
        id: '2010-dental',
        title: 'Smiles of Hope – Free Dental & Oral Health Camp',
        category: 'Health',
        categoryIcon: 'fas fa-tooth',
        date: '2nd May 2010',
        description: [
          'Under our Health Initiative, Khinvasara Trust organized a <strong>Free Dental and Oral Health Camp</strong> on <strong>2nd May 2010</strong> at Ghodegaon, with a strong commitment to reaching rural and underprivileged communities.',
          'In many villages, limited access to advanced dental care and high tobacco consumption increase the risk of serious oral diseases. The Trust brought expert medical care directly to the people — ensuring timely diagnosis, treatment, and awareness.',
        ],
        quote: 'Through this initiative, we didn\'t just treat dental issues — <strong>we restored confidence, awareness, and countless smiles</strong>.',
        infoBoxes: [
          {
            title: 'Highlights of the Camp',
            icon: 'fas fa-info-circle',
            items: [
              'Over <strong>315 patients</strong> across all age groups examined',
              'Dedicated team of <strong>10 dental professionals</strong> led by <strong>Dr. Anjali Gandhi, Dr. Rajendra Gandhi</strong>, and <strong>Dr. Sangita</strong>',
              'More than <strong>40 dental extractions</strong> performed on the spot',
              '<strong>180 patients</strong> referred to Pune for further treatment',
              'Camp inaugurated by <strong>Dilip Walse Patil</strong>, Member of the Maharashtra State Assembly',
              'Free lunch provided to all patients',
            ],
          },
        ],
        photos: [
          { src: image2010_001,      alt: 'Dental Camp 2010',        caption: 'Dental health camp inauguration' },
          { src: image2010_002,      alt: 'Patient examination',     caption: 'Doctors examining patients' },
          { src: image2010_003,      alt: 'Dental treatment',        caption: 'Dental treatment in progress' },
          { src: image2010_004,      alt: 'Camp activities',         caption: 'Health camp activities' },
          { src: image2010_005,      alt: 'Medical team',            caption: 'Medical team at work' },
          { src: image2010_006,      alt: 'Patient care',            caption: 'Compassionate patient care' },
          { src: image2010_007,      alt: 'Awareness session',       caption: 'Oral health awareness session' },
          { src: image2010_008,      alt: 'Community participation', caption: 'Villagers participating in the camp' },
          { src: image2010_009,      alt: 'Dental checkup',          caption: 'Dental checkup in progress' },
          { src: image2010_010,      alt: 'Treatment setup',         caption: 'Treatment setup at camp' },
          { src: image2010_011,      alt: 'Patient registration',    caption: 'Patient registration desk' },
          { src: image2010_012,      alt: 'Dental procedure',        caption: 'Dental procedure being performed' },
          { src: image2010_013,      alt: 'Camp overview',           caption: 'Overview of the dental camp' },
          { src: image2010_014,      alt: 'Expert consultation',     caption: 'Expert dental consultation' },
          { src: image2010_015,      alt: 'Patient queue',           caption: 'Patients waiting for checkup' },
          { src: image2010_016,      alt: 'Diagnostic session',      caption: 'Diagnostic session' },
          { src: image2010_017,      alt: 'Camp gathering',          caption: 'Gathering at dental camp' },
          { src: image2010_018,      alt: 'Health awareness',        caption: 'Health awareness drive' },
          { src: image2010_019,      alt: 'Dental equipment',        caption: 'Advanced dental equipment' },
          { src: image2010_020,      alt: 'Team coordination',       caption: 'Medical team coordination' },
          { src: image2010_021,      alt: 'Treatment area',          caption: 'Treatment area setup' },
          { src: image2010_022,      alt: 'Patient interaction',     caption: 'Doctor-patient interaction' },
          { src: image2010_023,      alt: 'Camp success',            caption: 'Successful camp moments' },
          { src: image2010_024,      alt: 'Community response',      caption: 'Overwhelming community response' },
          { src: image2010_025,      alt: 'Dental care',             caption: 'Dental care for all ages' },
          { src: image2010_026,      alt: 'Camp highlights',         caption: 'Camp highlights' },
          { src: image2010_027,      alt: 'Closing moments',         caption: 'Camp closing moments' },
          { src: image2010_028,      alt: 'Group photo',             caption: 'Group photo of team and participants' },
          { src: image2010_picture1, alt: 'Camp poster',             caption: 'Dental camp poster' },
        ],
        mediaPhotos: [
          { src: image2010_sakal_25apr,  alt: 'Sakal Coverage 25th April',  caption: 'Media coverage – Sakal, 25th April 2010' },
          { src: image2010_sakal_3may,   alt: 'Sakal Coverage 3rd May',     caption: 'Media coverage – Sakal, 3rd May 2010' },
          { src: image2010_lokmat_27apr, alt: 'Lokmat Coverage 27th April', caption: 'Media coverage – Lokmat, 27th April 2010' },
          { src: image2010_lokmat_3may,  alt: 'Lokmat Coverage 3rd May',    caption: 'Media coverage – Lokmat, 3rd May 2010' },
        ],
        stats: [
          { icon: 'fas fa-users',         value: '315+', label: 'Patients Examined' },
          { icon: 'fas fa-hospital-user', value: '180',  label: 'Referrals to Pune' },
          { icon: 'fas fa-tooth',         value: '40+',  label: 'Extractions Done' },
          { icon: 'fas fa-user-md',       value: '10',   label: 'Medical Team' },
        ],
      },
      {
        id: '2010-benches',
        title: 'Supporting Education Infrastructure – Donation of Benches',
        category: 'Education',
        categoryIcon: 'fas fa-chair',
        date: '2010',
        description: [
          'In 2010, the Trust extended its support to <strong>B. D. Kale College at Ghodegaon</strong>, which had been sanctioned a <strong>B.C.S. degree</strong> program. To facilitate the new course, the college required computer tables for its students.',
          'As a gesture of gratitude and in alignment with the Trust\'s core objective of promoting education, we donated <strong>10 benches</strong> to strengthen their infrastructure.',
        ],
        photos: [
          { src: image2010_aug_snap1, alt: 'Bench Donation Ceremony', caption: 'Bench donation ceremony at B.D. Kale College' },
          { src: image2010_aug_snap2, alt: 'College Infrastructure',  caption: 'Supporting college infrastructure' },
          { src: image2010_thanks,    alt: 'Thanking Letter',         caption: 'Letter of appreciation from B.D. Kale College' },
        ],
        stats: [
          { icon: 'fas fa-desktop',        value: '10',        label: 'Benches Donated' },
          { icon: 'fas fa-graduation-cap', value: 'B.C.S.',    label: 'Degree Support' },
          { icon: 'fas fa-school',         value: 'B.D. Kale', label: 'College' },
        ],
      },
    ],
  },

  // ── 2009 ─────────────────────────────────────────────────
  {
    year: '2009',
    label: '2009',
    initiatives: [
      {
        id: '2009-health',
        title: 'Healing Hearts – Mega Diabetes & Cardiac Health Camp',
        category: 'Health',
        categoryIcon: 'fas fa-heartbeat',
        date: '3rd May 2009',
        description: [
          'A <strong>Free Diabetes and Heart Disease Health Camp</strong> was organized on <strong>3rd May 2009</strong> at Ghodegaon, in collaboration with <strong>Anandrishiji Hospital, Ahmadnagar</strong>.',
          'More than <strong>360 patients</strong> from various villages were examined free of cost. Testing included Blood Sugar Check, ECG, General Medical Examination, and 2D Echo for over <strong>70 patients</strong> who required further evaluation.',
          'Critical cases were referred to Anandrishiji Hospital for advanced procedures at highly subsidized rates.',
        ],
        infoBoxes: [
          {
            title: 'Subsidized Treatment Rates at Anandrishiji Hospital',
            icon: 'fas fa-rupee-sign',
            details: [
              { label: 'Bypass Surgery', value: '₹ 45,000' },
              { label: 'Angioplasty',    value: '₹ 50,000' },
              { label: 'BMV',            value: '₹ 12,000' },
              { label: 'Angiography',    value: '₹ 4,000' },
            ],
            text: 'All charges inclusive of all medication',
          },
          {
            title: 'Distinguished Presence & Expert Care',
            icon: 'fas fa-star',
            items: [
              'Camp inaugurated by <strong>Dilip Walse Patil</strong>, Maharashtra State Finance Minister',
              'Closing ceremony graced by <strong>Shivajirao Patil</strong>',
              'A dedicated team of <strong>25 doctors, nurses, and healthcare professionals</strong>',
              'Patients ranged from <strong>6 months old</strong> to senior citizens <strong>above 80 years</strong>',
              'Over <strong>60 serious cases</strong> referred for further treatment',
              'Covered by <strong>Lokmat, Kesari, and Sakal</strong> newspapers',
            ],
          },
        ],
        photos: [
          { src: image2009_002, alt: 'Health Camp 2009',    caption: 'Free Diabetes & Heart Disease Health Camp' },
          { src: image2009_003, alt: 'Medical examination', caption: 'Doctors examining patients at camp' },
          { src: image2009_004, alt: 'ECG Testing',          caption: 'ECG testing facility at the camp' },
          { src: image2009_006, alt: 'Camp activities',      caption: 'Health camp activities and patient care' },
        ],
        mediaPhotos: [
          { src: image2009_lokmat, alt: 'Lokmat Media Coverage', caption: 'Media coverage – Lokmat newspaper' },
        ],
        stats: [
          { icon: 'fas fa-users',         value: '360+', label: 'Patients Examined' },
          { icon: 'fas fa-user-md',       value: '25',   label: 'Medical Staff' },
          { icon: 'fas fa-hospital-user', value: '60+',  label: 'Serious Referrals' },
          { icon: 'fas fa-heart',         value: '70',   label: '2D Echo Tests' },
        ],
      },
      {
        id: '2009-water',
        title: 'A Small Step, A Healthier Campus – Water Cooler Donation',
        category: 'Education & Health',
        categoryIcon: 'fas fa-tint',
        date: '2009',
        description: [
          'During our 2009 health camp at <strong>B.D. Kale College, Ghodegaon</strong>, the lack of safe drinking water emerged as a serious challenge — highlighted by the Principal in his speech.',
          'Responding to this need, our Trust <strong>donated and installed a water cooler</strong> for students and staff at the college building, ensuring access to clean, safe water and reducing the risk of waterborne infections.',
        ],
        featuredPhoto: {
          src: image2009_watercooler,
          alt: 'Water Cooler at B.D. Kale College',
          caption: 'Water cooler installed at B.D. Kale College, Ghodegaon — ensuring clean drinking water for students and staff',
        },
        infoBoxes: [
          {
            title: 'Initiative Details',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'Beneficiary', value: 'B.D. Kale College, Ghodegaon' },
              { label: 'Donation',    value: 'Water Cooler with Purification' },
              { label: 'Impact',      value: 'Clean drinking water for all students & staff' },
            ],
          },
        ],
        stats: [
          { icon: 'fas fa-tint',       value: 'Clean Water', label: 'Access Ensured' },
          { icon: 'fas fa-school',     value: 'B.D. Kale',   label: 'College' },
          { icon: 'fas fa-shield-alt', value: 'Reduced',     label: 'Infection Risk' },
          { icon: 'fas fa-heartbeat',  value: 'Health',      label: 'Enables Education' },
        ],
      },
    ],
  },

  // ── 2008 ─────────────────────────────────────────────────
  {
    year: '2008',
    label: '2008',
    initiatives: [
      {
        id: '2008-foodgrain',
        title: 'Food Grain Donation – St. John\'s Home',
        category: 'Community Service',
        categoryIcon: 'fas fa-seedling',
        date: '2008',
        description: [
          '<strong>St. John\'s Home for Women and Children</strong>, located at 808, Guruwar Peth, Pune, is constituted for the rehabilitation of children and women. It houses orphans, handicapped children, children of separated couples, sex workers and elderly people.',
          'After studying the way it is run and their requirements, the Trust decided to donate <strong>food grains sufficient for one month\'s requirement</strong>.',
        ],
        infoBoxes: [
          {
            title: 'Beneficiary Details',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'Organization', value: 'St. John\'s Home for Women and Children' },
              { label: 'Location',     value: '808, Guruwar Peth, Panchhaud, Pune-411042' },
              { label: 'Run By',       value: 'Society of St. Mary The Virgin In India' },
              { label: 'Donation',     value: 'Food grains for 1 month' },
            ],
          },
        ],
        photos: [
          { src: image2008_001, alt: 'Solar Panel Installation', caption: 'Installing solar panels at the school' },
          { src: image2008_002, alt: 'Inauguration Ceremony',    caption: 'Independence Day inauguration ceremony' },
          { src: image2008_003, alt: 'Solar System Setup',       caption: '3.25 Kw solar power generation system' },
        ],
        stats: [
          { icon: 'fas fa-wheat-awn',     value: '1 Month',       label: 'Food Grains Supply' },
          { icon: 'fas fa-home',          value: 'St. John\'s',   label: 'Home for Women & Children' },
          { icon: 'fas fa-hands-helping', value: 'Rehab',         label: 'Support' },
        ],
      },
      {
        id: '2008-chairs',
        title: 'Chair Donation – School Library',
        category: 'Education',
        categoryIcon: 'fas fa-chair',
        date: '2008',
        description: [
          '<strong>"Jeevan Shikshan Mandir"</strong> is a school located at Ghodegaon, Tal-Ambegaon, Maharashtra. The school library was devoid of chairs causing inconvenience to students.',
          'To ensure that students have a library environment conducive to studying, the Trust decided to <strong>donate chairs to the school library</strong>.',
        ],
        infoBoxes: [
          {
            title: 'Beneficiary Details',
            icon: 'fas fa-info-circle',
            details: [
              { label: 'School',   value: 'Jeevan Shikshan Mandir' },
              { label: 'Location', value: 'Ghodegaon, Tal-Ambegaon, Maharashtra' },
              { label: 'Donation', value: 'Chairs for School Library' },
            ],
          },
        ],
        stats: [
          { icon: 'fas fa-chair',     value: 'Chairs',          label: 'Donated' },
          { icon: 'fas fa-book-open', value: 'Library',         label: 'Infrastructure' },
          { icon: 'fas fa-school',    value: 'Jeevan Shikshan', label: 'Mandir School' },
        ],
      },
    ],
  },
];

// ============================================================
// HELPER: category → colour pill
// ============================================================
const CATEGORY_COLORS: Record<string, string> = {
  Health:                    'bg-red-100 text-red-700',
  Environment:               'bg-green-100 text-green-700',
  Education:                 'bg-blue-100 text-blue-700',
  'Community Service':       'bg-purple-100 text-purple-700',
  'Social & Environment':    'bg-teal-100 text-teal-700',
  'Environment & Education': 'bg-emerald-100 text-emerald-700',
  'Education & Health':      'bg-indigo-100 text-indigo-700',
};

function categoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? 'bg-gray-100 text-gray-700';
}

// ============================================================
// SUB-COMPONENTS
// ============================================================
type LightboxPhoto = { src: string; alt: string; caption: string };

function PhotoGrid({
  photos,
  title,
  onSelect,
}: {
  photos: Photo[];
  title?: string;
  onSelect: (p: LightboxPhoto) => void;
}) {
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(0);

  if (!photos || photos.length === 0) return null;

  const totalPages = Math.ceil(photos.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visiblePhotos = photos.slice(start, start + PAGE_SIZE);

  // Reset to first page if photos array changes
  useEffect(() => {
    setPage(0);
  }, [photos]);

  return (
    <div className="event-gallery">
      {title && (
        <h4 className="gallery-title">
          <i className="fas fa-camera" /> {title}
        </h4>
      )}
      <div
        className={`event-images-carousel ${
          totalPages > 1 ? 'has-pages' : ''
        }`}
      >
        <div className="event-images-grid" key={page}>
          {visiblePhotos.map((img, i) => (
            <div
              key={`${page}-${i}`}
              className="event-image-item"
              onClick={() => onSelect(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="image-overlay">
                <i className="fas fa-search-plus" />
                <p>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="event-carousel-controls">
            <button
              type="button"
              className="event-carousel-btn"
              onClick={() =>
                setPage((p) => (p - 1 + totalPages) % totalPages)
              }
              aria-label="Previous photos"
            >
              <i className="fas fa-chevron-left" />
            </button>

            <div className="event-carousel-progress">
              <div className="event-carousel-progress-track">
                <div
                  className="event-carousel-progress-thumb"
                  style={{
                    width: `${100 / totalPages}%`,
                    transform: `translateX(${page * 100}%)`,
                  }}
                />
              </div>
              <div className="event-carousel-dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`event-carousel-dot ${
                      i === page ? 'active' : ''
                    }`}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              <span className="event-carousel-count">
                {page + 1} / {totalPages}
              </span>
            </div>

            <button
              type="button"
              className="event-carousel-btn"
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              aria-label="Next photos"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FeaturedPhoto({
  photo,
  onSelect,
}: {
  photo: Photo;
  onSelect: (p: LightboxPhoto) => void;
}) {
  return (
    <div className="water-cooler-feature-image">
      <div
        className="event-image-item featured-single-image"
        onClick={() => onSelect(photo)}
      >
        <img src={photo.src} alt={photo.alt} loading="lazy" />
        <div className="image-overlay">
          <i className="fas fa-search-plus" />
          <p>{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}

function InfoBoxBlock({ box }: { box: InfoBox }) {
  return (
    <div className="event-details-box">
      <h4>
        <i className={box.icon} /> {box.title}
      </h4>
      {box.text && <p dangerouslySetInnerHTML={{ __html: box.text }} />}
      {box.link && (
        <p>
          <a href={box.link.href} target="_blank" rel="noopener noreferrer" className="event-link">
            <i className="fas fa-external-link-alt" /> {box.link.label}
          </a>
        </p>
      )}
      {box.items && (
        <ul className="event-list">
          {box.items.map((item, i) => (
            <li key={i}>
              <i className="fas fa-check-circle" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      )}
      {box.details && (
        <div className="details-grid">
          {box.details.map((d, i) => (
            <div key={i} className="detail-item">
              <span className="detail-label">{d.label}:</span>
              <span className="detail-value" dangerouslySetInnerHTML={{ __html: d.value }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="event-highlights">
      {stats.map((s, i) => (
        <div key={i} className="highlight-item">
          <i className={s.icon} />
          <h4>{s.value}</h4>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function InitiativeCard({
  initiative,
  isFirst,
  onSelect,
}: {
  initiative: Initiative;
  isFirst: boolean;
  onSelect: (p: LightboxPhoto) => void;
}) {
  const {
    title, category, categoryIcon, date,
    description, quote, infoBoxes, photos, mediaPhotos,
    featuredPhoto, pdfLink, stats,
  } = initiative;

  return (
    <div className={`sub-event${isFirst ? '' : ' sub-event--border'}`}>
      <div className="initiative-header">
        <span className={`initiative-category-pill ${categoryColor(category)}`}>
          <i className={categoryIcon} /> {category}
        </span>
        <span className="initiative-date">
          <i className="fas fa-calendar-alt" /> {date}
        </span>
      </div>

      <h4 className="sub-event-title">
        <i className={categoryIcon} /> {title}
      </h4>

      {description.map((para, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
      ))}

      {infoBoxes?.map((box, i) => <InfoBoxBlock key={i} box={box} />)}

      {quote && <p className="event-quote" dangerouslySetInnerHTML={{ __html: quote }} />}

      {pdfLink && (
        <a href={pdfLink.href} target="_blank" rel="noopener noreferrer" className="gratitude-document">
          <i className="fas fa-file-pdf" /> {pdfLink.label}
        </a>
      )}

      {featuredPhoto && <FeaturedPhoto photo={featuredPhoto} onSelect={onSelect} />}

      {photos && photos.length > 0 && (
        <PhotoGrid photos={photos} title="Event Photographs" onSelect={onSelect} />
      )}

      {mediaPhotos && mediaPhotos.length > 0 && (
        <PhotoGrid photos={mediaPhotos} title="Media Coverage" onSelect={onSelect} />
      )}

      <StatsRow stats={stats} />
    </div>
  );
}

// ============================================================
// LIGHTBOX
// ============================================================
function Lightbox({
  photo,
  onClose,
}: {
  photo: LightboxPhoto | null;
  onClose: () => void;
}) {
  if (!photo) return null;
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <i className="fas fa-times" />
        </button>
        <img src={photo.src} alt={photo.alt} />
        <p className="image-caption">{photo.caption}</p>
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
const Events = () => {
  const [activeYear, setActiveYear] = useState('2021');
  const [lightboxPhoto, setLightboxPhoto] = useState<LightboxPhoto | null>(null);

  const activeEntry = TIMELINE.find((e) => e.year === activeYear);
  const initiatives = activeEntry?.initiatives ?? [];
  const isMultiple  = initiatives.length > 1;

  return (
    <section className="events-section" id="events">
      <div className="section-header">
        <span className="section-badge">
          <i className="fas fa-calendar-alt" /> Our Journey
        </span>
        <h2>Events &amp; Milestones</h2>
        <p>Our commitment to social service through the years</p>
      </div>

      <div className="events-container">
        {/* Trust formation box */}
        <div className="formation-box">
          <h3>
            <i className="fas fa-landmark" /> Trust Formation
          </h3>
          <p>
            The Trust was conceptualised and constituted in the year 2007 and was registered
            under the Societies Registration Act, 1860 on{' '}
            <strong>12th February, 2007</strong>
          </p>
        </div>

        {/* ── Year picker ── */}
        <div className="years-grid">
          {TIMELINE.map(({ year, label }) => (
            <span
              key={year}
              className={`year-badge ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Active year card */}
        {activeEntry && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year {activeEntry.year}</span>
              <h3>
                {isMultiple ? 'Multiple Initiatives' : initiatives[0]?.title}
              </h3>
              {isMultiple ? (
                <span className="category">
                  <i className="fas fa-star" /> Categories:{' '}
                  {[...new Set(initiatives.map((i) => i.category))].join(', ')}
                </span>
              ) : (
                <span className="category">
                  <i className={initiatives[0]?.categoryIcon} /> Category:{' '}
                  {initiatives[0]?.category}
                </span>
              )}
            </div>

            <div className="featured-event-content">
              {isMultiple && (
                <div className="initiatives-summary">
                  <span className="initiatives-summary-label">
                    <i className="fas fa-list-check" /> {initiatives.length} Initiatives This Year
                  </span>
                  <div className="initiatives-summary-chips">
                    {initiatives.map((init, idx) => (
                      <a
                        key={init.id}
                        href={`#${init.id}`}
                        className="initiative-chip"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(init.id)
                            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                      >
                        <span className="initiative-chip-num">{idx + 1}</span>
                        <span className="initiative-chip-text">
                          <i className={init.categoryIcon} /> {init.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {initiatives.map((initiative, idx) => (
                <div
                  key={initiative.id}
                  id={initiative.id}
                  className={`initiative-block ${
                    isMultiple ? 'initiative-block--card' : ''
                  }`}
                >
                  {isMultiple && (
                    <div className="initiative-block-header">
                      <div className="initiative-block-num">{idx + 1}</div>
                      <div className="initiative-block-meta">
                        <h5 className="initiative-block-title">
                          <i className={initiative.categoryIcon} /> {initiative.title}
                        </h5>
                        <span className="initiative-block-sub">
                          <i className="fas fa-calendar-alt" /> {initiative.date}
                        </span>
                      </div>
                      <span
                        className={`initiative-category-pill ${categoryColor(
                          initiative.category
                        )}`}
                      >
                        {initiative.category}
                      </span>
                    </div>
                  )}
                  <InitiativeCard
                    initiative={initiative}
                    isFirst={idx === 0}
                    onSelect={setLightboxPhoto}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />

      {/* ── Styles ── */}
      <style>{`

        /* ============================================================
           YEAR PICKER — horizontal scroll on desktop, vertical on phone
           ============================================================ */

        /* Base (mobile-first): vertical scrollable list */
        .years-grid {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          overflow-x: visible;
          overflow-y: auto;
          max-height: 280px;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
          padding-right: 4px;
          padding-bottom: 0;
          scroll-snap-type: y mandatory;
          scrollbar-width: thin;
          scrollbar-color: var(--primary) var(--border);
          justify-content: flex-start;
        }

        .years-grid::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        .years-grid::-webkit-scrollbar-track {
          background: var(--border);
          border-radius: 2px;
        }

        .years-grid::-webkit-scrollbar-thumb {
          background: var(--primary-light);
          border-radius: 2px;
        }

        .years-grid::-webkit-scrollbar-thumb:hover {
          background: var(--primary);
        }

        .year-badge {
          flex-shrink: 0;
          scroll-snap-align: start;
          width: 100%;
          text-align: center;
          justify-content: center;
        }

        /* Laptop / desktop (768px+): switch to horizontal scroll */
        @media (min-width: 768px) {
          .years-grid {
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            max-height: none;
            padding-right: 0;
            padding-bottom: 6px;
            scroll-snap-type: x mandatory;
            justify-content: flex-start;
          }

          .year-badge {
            width: auto;
            text-align: left;
            justify-content: flex-start;
          }
        }

        /* ── Initiative header row ── */
        .initiative-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }
        .initiative-category-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .initiative-date {
          font-size: 0.8rem;
          color: var(--text-light);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .initiative-number {
          color: var(--primary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .sub-event { padding: 0; }
        .sub-event--border { padding-top: 0; }

        /* ── Multi-initiative summary (table of contents) ── */
        .initiatives-summary {
          background: linear-gradient(135deg, rgba(15,76,117,0.06) 0%, rgba(50,130,184,0.04) 100%);
          border: 1px solid rgba(15,76,117,0.12);
          border-radius: 14px;
          padding: 1.1rem 1.25rem;
          margin-bottom: 1.5rem;
        }
        .initiatives-summary-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 0.75rem;
          padding: 0.3rem 0.8rem;
          background: white;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(15,76,117,0.08);
        }
        .initiatives-summary-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .initiative-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.85rem 0.45rem 0.45rem;
          background: white;
          border: 1px solid rgba(15,76,117,0.18);
          border-radius: 999px;
          color: var(--dark);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .initiative-chip:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15,76,117,0.22);
        }
        .initiative-chip:hover .initiative-chip-num {
          background: white;
          color: var(--primary);
        }
        .initiative-chip-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light, #3282b8) 100%);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .initiative-chip-text i {
          margin-right: 0.3rem;
          opacity: 0.85;
        }

        /* ── Numbered initiative card (when multiple in a year) ── */
        .initiative-block { scroll-margin-top: 90px; }
        .initiative-block + .initiative-block { margin-top: 1.75rem; }
        .initiative-block--card {
          position: relative;
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem 1.5rem 1.25rem;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .initiative-block--card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-light, #3282b8) 50%, var(--secondary, #d4770e) 100%);
        }
        .initiative-block--card:hover {
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.1);
          transform: translateY(-2px);
        }
        .initiative-block-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px dashed var(--border);
          flex-wrap: wrap;
        }
        .initiative-block-num {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light, #3282b8) 100%);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          font-weight: 800;
          font-family: 'Cormorant Garamond', serif;
          box-shadow: 0 6px 18px rgba(15, 76, 117, 0.3);
          letter-spacing: -0.5px;
        }
        .initiative-block-meta {
          flex: 1;
          min-width: 180px;
        }
        .initiative-block-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 0.2rem;
          line-height: 1.3;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .initiative-block-title i { color: var(--primary); font-size: 0.95rem; }
        .initiative-block-sub {
          font-size: 0.78rem;
          color: var(--text-light);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        /* Inside a numbered card, hide the duplicated InitiativeCard header */
        .initiative-block--card .initiative-header,
        .initiative-block--card .sub-event-title {
          display: none;
        }
        .initiative-block--card .sub-event { padding-top: 0; }

        /* ── Gallery grid ── */
        .event-gallery {
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--light);
          border-radius: 12px;
        }
        .gallery-title {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .event-images-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          animation: photoFadeIn 0.4s ease;
        }
        @keyframes photoFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Auto-paging photo carousel ── */
        .event-images-carousel { position: relative; }
        .event-carousel-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .event-carousel-btn {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: white;
          color: var(--primary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(15, 76, 117, 0.08);
        }
        .event-carousel-btn:hover {
          background: var(--primary);
          color: white;
          transform: scale(1.06);
        }
        .event-carousel-progress {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        .event-carousel-progress-track {
          flex: 1;
          min-width: 80px;
          height: 4px;
          background: rgba(15, 76, 117, 0.12);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }
        .event-carousel-progress-thumb {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light, #3282b8) 100%);
          border-radius: 999px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .event-carousel-dots {
          display: flex;
          gap: 6px;
        }
        .event-carousel-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: none;
          background: rgba(15, 76, 117, 0.25);
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .event-carousel-dot:hover { background: rgba(15, 76, 117, 0.5); }
        .event-carousel-dot.active {
          background: var(--primary);
          transform: scale(1.4);
        }
        .event-carousel-count {
          font-size: 0.78rem;
          color: var(--text-light, #64748b);
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          min-width: 38px;
          text-align: right;
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
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .event-image-item:hover img { transform: scale(1.05); }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 0.75rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .event-image-item:hover .image-overlay { opacity: 1; }
        .image-overlay i { font-size: 1.4rem; color: white; margin-bottom: 0.4rem; }
        .image-overlay p { color: white; font-size: 0.8rem; text-align: center; margin: 0; }

        /* ── Lightbox ── */
        .image-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.25s ease;
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
          top: -42px;
          right: 0;
          background: rgba(255,255,255,0.12);
          border: none;
          color: white;
          font-size: 1.4rem;
          width: 38px; height: 38px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .modal-close-btn:hover { background: rgba(255,255,255,0.22); transform: rotate(90deg); }
        .image-caption { color: white; text-align: center; margin-top: 0.9rem; font-size: 0.95rem; }

        /* ── Featured single image ── */
        .water-cooler-feature-image {
          display: flex;
          justify-content: center;
          margin: 1.5rem 0;
        }
        .featured-single-image {
          max-width: 480px;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          border: 3px solid var(--primary);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .featured-single-image:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }

        /* ── Quote ── */
        .event-quote {
          background: linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%);
          border-left: 4px solid var(--primary);
          padding: 1.1rem 1.4rem;
          margin: 1.4rem 0;
          border-radius: 0 10px 10px 0;
          font-style: italic;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--dark);
        }

        /* ── Info boxes ── */
        .event-details-box {
          background: var(--light);
          padding: 1.25rem;
          border-radius: 10px;
          margin: 1.25rem 0;
          border-left: 3px solid var(--primary);
        }
        .event-details-box h4 {
          color: var(--primary);
          margin-bottom: 0.7rem;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .event-details-box p { font-size: 0.88rem; color: var(--text); margin-bottom: 0.4rem; }
        .event-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .event-link:hover { text-decoration: underline; }

        /* ── Event list ── */
        .event-list { list-style: none; padding: 0; margin: 0.5rem 0; }
        .event-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text);
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        .event-list li i { color: var(--primary); margin-top: 3px; flex-shrink: 0; }

        /* ── Details grid ── */
        .details-grid { display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-top: 0.5rem; }
        @media (min-width: 600px) { .details-grid { grid-template-columns: 1fr 1fr; } }
        .detail-item { display: flex; flex-direction: column; gap: 2px; }
        .detail-label { font-size: 0.75rem; color: var(--text-light); font-weight: 600; text-transform: uppercase; letter-spacing: 0.4px; }
        .detail-value { font-size: 0.9rem; color: var(--dark); font-weight: 500; }

        /* ── Stats row ── */
        .event-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.9rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        @media (min-width: 600px) {
          .event-highlights { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
        }
        .highlight-item {
          text-align: center;
          padding: 1.1rem 0.75rem;
          background: var(--light);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .highlight-item:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .highlight-item i { font-size: 1.6rem; color: var(--primary); margin-bottom: 0.5rem; display: block; }
        .highlight-item h4 { font-size: 1.25rem; color: var(--dark); margin-bottom: 0.15rem; font-weight: 700; }
        .highlight-item p { color: var(--text-light); font-size: 0.78rem; margin: 0; }

        /* ── PDF link ── */
        .gratitude-document {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          margin: 1rem 0;
          transition: background 0.3s ease;
        }
        .gratitude-document:hover { background: var(--primary-dark); }

        /* ── Divider ── */
        .event-divider {
          border: none;
          border-top: 2px dashed var(--border);
          margin: 2rem 0;
        }

        /* ── Sub-event title ── */
        .sub-event-title {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 480px) {
          .event-images-grid { grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
          .event-carousel-count { display: none; }
          .modal-close-btn { top: 10px; right: 10px; }
          .featured-single-image { max-width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Events;
