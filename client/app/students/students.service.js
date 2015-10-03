'use strict';

angular.module('anarkodApp')
  .service('Students', function ($resource) {
    return $resource('/api/students/:id/:controller', {
      id: '@_id'
    },
    {
      update: {
        method: 'PUT'
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });

    /*
    var data = {
      'Ricky': {
        quote : 'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',
        image: 'ricky.jpg',
        topics : [
          {name:'Chitpaseuth',quote:'Risk more, reflect more and leave a legacy',image:'chitpaseuth.jpg'},
          {name:'Khatthanam',quote:'A Vision without execution is an hallucination',image:'khatthanam.jpg'},
          {name:'Danu',quote:'Learn the hard way and fight easy',image:'danu.jpg'},
          {name:'Nilada',quote:'Don’t give up before you even try',image:'nila.jpg'},
          {name:'Viengdalat',quote:'We ought to spend our energies not on useless conflicts but on doing what is clearly good',image:'viengdalat.jpg'},
        ],
        qualifications : [
          {name:'Business'},
          {name:'English'}
        ],
        projects : [
          {name:'ອະນາຄົດ.com'}
        ],
        workplaces : [
          {name:'Down Jones'}
        ],
        schools : [
          {name:'National University of Singapore'}
        ],
        interests : [
          {name:'Art'},
          {name:'Comic'},
          {name:'Sales'}
        ],
        circles : [
          {name:'Chitpaseuth',image:'chitpaseuth.jpg'},
          {name:'Khatthanam',image:'khatthanam.jpg'},
          {name:'Danu', image:'danu.jpg'},
          {name:'Nilada', image:'nila.jpg'},
          {name:'Viengdalat', image:'viengdalat.jpg'},
        ],
        infos : [
          {
            question: 'What path brought you here?',
            answer:'I have been working at Dow Jones as a research editor for its Risk & Compliance product since mid-2014. I would say significantly what brought me here is basically my strong previous experience in market research field. During the course of my undergraduate study at the National University of Singapore, I have undertaken few internships in the research industry for both medium and large corporations. Additional, my Business Administration degree with marketing specialization that I acquired also laid a path for me to walk down this road. And last but not least, I would say my language proficiency in English, Lao and Thai also proves to be a highly sought-after skill at the point in time. All in all, I would say what really contribute to how I arrive to this point of my life is the experience that I have been acquiring during the course of my study and also about matching up my skills and knowledge to a place where it could be of use to and in demand. I believe nothing is useless all skills are in demand, though the demand may varied according to space and time.',
            image:{position:'right', url:'r1.jpg'}
          },
          {
            question: 'What are you known for professionally?',
            answer:'I have always been known by diverse personas by different social groups which is essentially what I am aiming for. Back at my home town, I am known as an elite student from the top school in Laos who grabbed a fully-funded scholarship to study at the prestigious National University of Singapore’s Business School, the best university in Asia and under the top 30 globally. ' +
            '<br /><br /> On the other hand, professionally I am also known as a marketing and advertising personnel and an aspiring artist. I have been doing digital graphic and painting since young age, the skills that I have self-learnt for a decade. The work that I have done ranging from designing a shop logo for a Laotian apparel clothing online store to a marketing materials for a country wide theatrical production, resulting in more than 95% tickets sold. Apart from that, I have also participated in various art performances with the biggest one being the art performance at Palais De Tokyo, Paris, France in March 2015, the event fully sponsored by Singapore International Festival of Arts.' +
            '<br /><br /> In a nutshell, I would say I have a knack for being creative and expressive in ideas which eventually help defines me as a person which might be viewed by different persona by different people but eventually I believe what connects all that together is how I like to be an expressive person and have the love for idea manifestation in many different ways.  ',
            image:{position:'none', url:'r2.jpg'}
          },
          {
            quote: 'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',
            answer:'',
            image:''
          },
          {
            question: 'What are you most passionate about professionally?',
            answer:'What I passionate about personally is to meet new people. I have come to learnt recently that people no matter who or where they are, they all are different human-beings with different memory and different way of thoughts. I find the difference in how different people interpret things differently very fascinating. It entices me to seek more of it by ways of talking and mingling around with more people and extract their thoughts out of their minds. I enjoy the idea of being around diverse people. Apart from that I am also into painting which I have been learning by myself for a decade which was first started off as a hobby that I do during my free time and later become more my freelancing work sometimes. I am also a huge fan of action and thriller movie genres.',
            image:{position:'right', url:'r3.jpg'}
          },
          {
            question: 'What can’t you stop talking about?',
            answer:'What I passionate about personally is to meet new people. I have come to learnt recently that people no matter who or where they are, they all are different human-beings with different memory and different way of thoughts. I find the difference in how different people interpret things differently very fascinating. It entices me to seek more of it by ways of talking and mingling around with more people and extract their thoughts out of their minds. I enjoy the idea of being around diverse people.',
            image:{position:'right', url:'r2.jpg'}
          },
          {
            question: 'How long have you been doing what you do?',
            answer:'As a research editor? I have been doing that since mid-2014. As a marketing personnel? during my final year of my undergraduate study in 2013. As an artist? Since forever.',
            image:{position:'none'}
          },
          {
            question: 'What would be impossible for you to give up?',
            answer:'Although I was born in Australia, I did not really form a bond with the place since I only lived there for 2 years before I came to live in Laos which I really can call it my hometown. I grew up in Vientiane capital in a pretty common family environment, with few harsh turning points along my childhood and teenage years. Since I considered myself to be a bit above average in term of studies among my batch in Laos, it is pretty safe to assume that I would continue my study abroad. Although Singapore is not really my first choice, I am really glad that I did not choose to go to Australia. Now that I have graduated, given that I could have better future opportunities and also my family financial situation at that point in time, I have chosen to work in Singapore.',
            image:{position:'none'}
          },
          {
            question: 'Any volunteer activities you’re crazy about?',
            answer:'I am crazy about networking activities or anything that involves meeting a bunch of new people.',
            image:{position:'left', url:'r4.jpg'}
          },
          {
            question: 'Any awards or medals, or even medallions? Personal okay, too. ',
            answer:'Apart from a collection of certificates or outstanding student monthly awards during primary and secondary schools, I have gained the award for the 2nd most outstanding math student in Vientiane capital during my secondary school year.',
            image:{position:'none'}
          },
          {
            question: 'What would be impossible for you to give up?',
            answer:'The one thing that I would never give up is the time when people look down and think otherwise of me. The idea is I would never be demoralised by how people judge and assume that I would fail. The opinion of other people are precious and I would definitely learn from it, but I would never allow those negative ideas to hinder me from pursuing what I have always intended to do in the first place.',
            image:{position:'none'}
          },
          {
            question: 'Why would someone not want to work with you?',
            answer:'I can think of one reason why people might not want to work for me is because I might appear to be too straightforward at times that it might appear as being rude and offensive to the person, although that was never really the case.',
            image:{position:'none'}
          },
          {
            question: 'How do you want to be remembered?',
            answer:'Honestly, I do not mind of being not remembered. My purpose in life is more of my feeling personally not from the external factor. However, if I would have to give one answer to this question, maybe I would want to be remember as a kind person. Success and money although is something important and definitely useful, I would rather want people to remember the personality, the kindness and gentleness of me as a fellow human-being. That is one thing that I want people to learn, share and remember it for the rest of their lives.',
            image:{position:'none'}
          }
        ]
      },
      'Chitpaseuth': {
        quote: 'Risk more, reflect more and leave a legacy',
        image: 'chitpaseuth.jpg',
        topics : [
          {name:'Khatthanam',quote:'A Vision without execution is an hallucination',image:'khatthanam.jpg'},
          {name:'Danu',quote:'Learn the hard way and fight easy',image:'danu.jpg'},
          {name:'Nilada',quote:'Don’t give up before you even try',image:'nila.jpg'},
          {name:'Ricky',quote:'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',image:'ricky.jpg'},
          {name:'Viengdalat',quote:'We ought to spend our energies not on useless conflicts but on doing what is clearly good',image:'viengdalat.jpg'},
        ],
        qualifications : [
          {name:'Master of Information System'},
          {name:'Bachelor of Computer Science'}
        ],
        projects : [
          {name:'PriceTag'},
          {name:'Sneshat'},
          {name:'KinYung.com'},
          {name:'ອະນາຄົດ.com'}
        ],
        workplaces : [
          {name:'Titansoft Singapore'}
        ],
        schools : [
          {name:'Nanyang Technological University'},
          {name:'National University of Singapore'}
        ],
        interests : [
          {name:'Agile Development'},
          {name:'Web Application'},
          {name:'Basketball'},
          {name:'Self-development'},
          {name:'Startup'}
        ],
        circles : [
          {name:'Ricky',image:'ricky.jpg'},
          {name:'Khatthanam',image:'khatthanam.jpg'},
          {name:'Danu', image:'danu.jpg'},
          {name:'Nilada', image:'nila.jpg'},
          {name:'Viengdalat', image:'viengdalat.jpg'},
        ],
        infos : [
          {
            question: 'How do I get here?',
            answer:'After fail the entrance to the NUOL, I had studied in Genetic school for 2 years before I got a scholarship to study in Singapore. I have been working as a web developer since I graduated from Nanyang Technological University in 2012. My major is computer science and I am currently MSc. part-time student at NUS.',
            image:{position:'left', url:'c6.jpg'}
          },
          {
            question: 'What are you known for professionally?',
            answer:'I am the guy when my friends who need help for IT related, range from fixing printer, retrieve lost data to building up a web application. But professionally, I am developing and maintaining a website. I am a .Net developer and primary language is C# and javascript. I also like the dynamic language like Javascript, because it kind of cool to use one language to write everything!',
            image:{position:'right',url:'c5.jpg'}
          },
          {
            quote: 'Risk more, reflect more and leave a legacy',
            answer:'',
            image:'',
            author: 'some old folk'
          },
          {
            question: 'What are you passionate about?',
            answer:'Developing a software with high quality which easy to maintain. Because there are so many uncertainty in software world, being flexible is one of the key to survive. I have recently practise agile developement, scrum framework to be specific. I learn lots of techniques and skills which help me to write a better quality software, for example TDD and CleanCode. I always try to keep myself up to date with the new technology.',
            image:{position:'left',url:'c4.jpg'}
          },
          {
            question: 'Do you have any startup?',
            answer:'I always have ideas to build things for people to use. Most of them are just experiment, for example, I wrote "PriceTag" while I was learning MongoDB and Node.Js, it was my frist side project for keep track of my income/spending. Sneshat, a mini web application to for typing Laos on the web, it basically generate all the combination of the Laos characters. I wrote that while I was in a transit in KL. Recently, I have explored with the Angular.Js and React.Js, I use them to build my current side project "KinYung.com", it is a web application that help you ordering food online and it is still under deveopment and prototyping, so stay tune for update on the projects :)',
            image:{position:'none'}
          },
          {
            question: 'How long have you been doing this?',
            answer:'I had my first PC when I was 12, it was Window Me and I only used it for Word and Excel stuff. Then I started to explore other applications and operating system. I wrote my first "hallo world" in Java after I graduated from high school. Eee PC 1000 was my primary workspace during 4 years in University. So, roughly about 10 years that I have wrote code...',
            image:{position:'right',url:'c1.jpg'}
          },
          {
            question: 'Any plan to go back Laos?',
            answer: 'Yes!, I will go back to Laos after I finished my MSc. I always wanted to do a startup, maybe I will try my luck here in Singapore first. Just to get some experience',
            image: {position:'bottom',url:'c2.jpg'}
          }
        ]
      },
      'Khatthanam': {
        quote: 'A Vision without execution is an hallucination',
        image: 'khatthanam.jpg',
        topics : [
          {name:'Danu',quote:'Learn the hard way and fight easy',image:'danu.jpg'},
          {name:'Nilada',quote:'Don’t give up before you even try',image:'nila.jpg'},
          {name:'Chitpaseuth',quote:'Risk more, reflect more and leave a legacy',image:'chitpaseuth.jpg'},
          {name:'Ricky',quote:'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',image:'ricky.jpg'},
          {name:'Viengdalat',quote:'We ought to spend our energies not on useless conflicts but on doing what is clearly good',image:'viengdalat.jpg'},
        ],
        projects : [
          {name:'PhD Research: Ultra high durable and high performance structure'},
          {name:'Design: High rise buildings, residential and industrial buildings'},
          {name:'ອະນາຄົດ.com'}
        ],
        workplaces : [
          {name:'Nanyang Technological University (NTU)'},
          {name:'PiSECCON : Architectural and Civil Engineering a Consultancy'}
        ],
        schools : [
          {name:'Nanyang Technological University (NTU)'},
          {name:'Vientiane High School'},
          {name:'Xinxay school'},
          {name:'Vientiane High School'},
          {name:'Association of Lao Students in Singapore ( ALSIS), President'}
        ],
        qualifications : [
          {name:'Civil and Structure Engineering - PhD (candidate)'},
          {name:'B.Eng'},
          {name:'Authorized Engineer (Lao)'}
        ],
        interests : [
          {name:'Architecture, Interior design'},
          {name:'Business and management'},
          {name:'Agriculture'},
          {name:'Music, guitar, rock band'},
          {name:'Travel'},
          {name:'Photography'}

        ],
        circles : [
          {name:'Ricky', image:'ricky.jpg'},
          {name:'Chitpaseuth', image:'chitpaseuth.jpg'},
          {name:'Danu', image:'danu.jpg'},
          {name:'Nilada', image:'nila.jpg'},
          {name:'Viengdalat', image:'viengdalat.jpg'},
        ],
        infos : [
          {
            question: 'Tell us about what you do now...',
            answer:'I am doing my PhD in civil engineering at Nanyang Technological University (NTU), Singapore. I graduated from undergraduate degree in 2014 and right after, I was awarded a research scholarship to pursue a direct 4 year period PhD program. My research is about  Ultra high durable and high performance steel fibre reinforced concrete structure. Apart from that I also do consultancy jobs with my supervisor in NTU like designs and analysis of tall buildings and industrial structures, and testing of of structure elements.',
            image:{position:'left', url:'k1.jpg'}
          },
          {
            question: 'Tell us what inspire your life, what motivate you...',
            answer:'My parents give me the major inspirations and motivations for me. Without their endless loves and supports, I can\'t imagine how I\'d end up today. I come from a very modest family, my parents were practice medical doctors and now they are happily retired. It\'s interesting that none of their children follow their path. I am into Engineering, my younger brother is in Architecture and my youngest sister is in Art and Design. And, I cannot exclude the influential people that I have met through out my life. Those people include my teachers from elementary school to high school who nurtured my passion for higher education, my university mentors and professors who are constantly guiding and helping me to develop my potentials and core strength to become a successful and happy person. Definitely, my friends! I am lucky to have a big circle of friends, they are people who grow up in the same generation with me. Most of my friends are big thinker, ambitious and go getters. I learn a lot from them when my friends passionately share about their ideas, their careers, their inspiration. Interestingly, many of them are not in Civil Engineering.  So, my friends give me the diversity and are the extra energy to drive me forward, really.',
            image:{position:'bottom', url:'k4.jpg'}
          },
          {
            quote: 'A Vision without execution is an hallucination',
            answer:'',
            image:'',
            author: 'Jeffery E. Garten'
          },
          {
            question: 'You will finish your PhD soon, can you share your future plan with us?',
            answer:'Many will think that I will find a well paid job in Singapore. But No. I am seriously eager to go back to Laos as soon as I get my PhD. I have been away from home, family for too long. But that\'s really the main thing. I want to go back and contribute to the society in some ways. To double confirm that I will  definitely go back is that I just set up a small architect and civil engineering design firm called PiSECCON in Laos with my brother and friends in 2014. We have been working sleepless nights to get small projects like designing of houses and apartments. Our office is actually our house garage ( thanks to my parents to let us turn the garage into a small working space). Until today, we don\'t really earn much from the projects, but we are happy to have them, we love the jobs, we love to create beautiful space and environment for people. So, we are in the stage or building up our portfolio and hopefully we can mature into a reputable design firm in near future.',
            image:{position:'left',url:'k3.jpg'}
          },
          {
            question: 'Apart from your studies, do you have any Extracurricular activities or projects?',
            answer:'Oh yes, I like to joke with my friends that I do PhD just for my pass time [smile]. It\s not true, I still put my first priority to be my study. I devote almost 8 to 9 hours every weekdays in my research lab/office in order to complete my degree by 2016. But I am a very active person and in need of constant excitement to fulfill my satisfaction. Music is my major hobby, I picked up playing guitar since I was 12 year old and never stop playing ever since. In 2013, I was a Vice President of the Guitar Ensemble club in my university, we normally had a big concert twice a year. Now, I am a lead guitarist in a band called Gaudium701, the band was formed under the Graduate Student Council in my university, we are the only rock band for the Master and PhD level students in my university, so we have opportunities to perform almost every two weeks. Apart from music,  I am selected to be one of 20 mentors in the whole university who look after and guide hundreds of young scholars from oversea who are having their 1 year period bridging course ( foundation year) before enrolling their first year in NTU. More, I am also the president of the Association of Lao Students in Singapore ( ALSIS) for the past 2 years under the supervision of Lao Embassy in Singapore. We are relatively a small community as compared to other nations like China, Indonesia, Malaysia and Vietnam. With ALSIS,  our Lao students in Singapore have more opportunities to gather more often and share our problems and most importantly our visions to develop a campaign to attract more Lao students especially scholars to pursue their eductions in one of the best place for education, Singapore.  Lastly, I am taking one of the major role together with anarkod.com team to drive this project forward. This project will inspire hundreds, thousands and hopefully millions of the young generation the futures of Laos. We want it to happen and we will make it happen.',
            image:{position:'bottom', url:'k2.jpg'}
          },
          {
            question: 'How often do you travel?',
            answer:'',
            image:{position:'bottom', url:'k5.jpg'}
          }
        ]
      },
      'Viengdalat': {
        quote: 'You never really understand a person until you consider things from his point of view, until you climb into his skin and walk around in it',
        image: 'viengdalat.jpg',
        topics : [
          {name:'Ricky',quote:'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',image:'ricky.jpg'},
          {name:'Chitpaseuth',quote:'Risk more, reflect more and leave a legacy',image:'chitpaseuth.jpg'},
          {name:'Khatthanam',quote:'A Vision without execution is an hallucination',image:'khatthanam.jpg'},
        ],
        projects : [
          {name:'Lao Help Lao'},
          {name:'Project Orange'},
          {name:'ອະນາຄົດ.com'}
        ],
        workplaces : [
          {name:'The Embassy of India'}
        ],
        schools : [
          {name:'Overseas Community Involvement Program (OCIP)'},
          {name:'Pre-Certificate Paramedic Course'},
        ],
        qualifications : [
          {name:'National University of Singapore, BA in Geography'},
          {name:'Interpreter and Social Secretary to Ambassador'},
          {name:'Chief Translator'},

        ],
        interests : [
          {name:'Run-Bike-Swim'},
          {name:'Rock Climbing'},
          {name:'Mountaineering'},
          {name:'Writing'},
          {name:'Blogging'},
          {name:'Volunteering'},
          {name:'Books/Literature'}
        ],
        circles : [
          {name:'Ricky', image:'ricky.jpg'},
          {name:'Khatthanam', image:'khatthanam.jpg'},
          {name:'Chitpaseuth', image:'chitpaseuth.jpg'},
        ],
        infos : [
          {
            question: 'How it all started?',
            answer:'I started to run when I was sixteen if I recalled it, as recreational hobby with. When I came to NUS for my undergraduate course in Singapore, I continued to run regularly, and what happened is my residential hall, King Edward VII Hall – place I stayed during my study in Singapore, needed a runner for Inter Hall Games. One of my friends invited me in, so I was kind of go along with the flow, but I ended up having really good timing. I was quite surprise myself,  I mean ‘Wow, I didn’t even know I can do that’. For the past few years I’ve been only running just for fun, and it’s amazing to come out and see how much I can do. So I started to take up running seriously from there.' +
            '<br/><br/> From a small running team in residential hall, next I started joining Cross Country Team as the University Varsity Athlete, for real. I was really committed with training; the schedule was insanely crazy for a non-competitive and no experienced runner like me.  We train four days a week, at least two hours each time, combining intensive and recreational program every other days. It was real struggle at first, as I also had to keep up with the hectic academic school work, but then after sometime of adjusting, things kept getting better, I see how much I improve progressively throughout semesters of training. And before I know it I already fell in love with this sport. I was really good at it (I never thought I would), I was selected as vice captain and up to captain position for Hall team, and I was really honored to be selected as a Co-Captain for the University Cross Country Team in AY 2012/13.',
            image:{position:'bottom', url:'b1.jpg'}
          },
          {
            quote: 'We ought to spend our energies not on useless conflicts but on doing what is clearly good',
            answer:'',
            image:'',
            author: 'Leo Nikolayevich'
          },
          {
            question: 'What do you learn from running?',
            answer:'Running to me is more than just a sport, in or out of the field, running teaches a lot about self grow and life achievement – it’s about working hard, being patient and discipline toward your goals – I would consider my best performance was in 2012 when I took 3rd place for Singapore 10 km Nike Run timing of 42 minutes. There was once I set a goal to run a full marathon (42.1 KM) aiming for less than 4 hours. It was not easy, to be able to run that long distance clocking under four hours, I had to reach the average pace of less than an hour split every 10 km.  I spent countless weekends training hard, and put extra afford adding more training schedule beside the one I already had with the Cross Country team. Almost every day after class I would spend at least two hours at the stadium training. Some days I would go for a double training, early morning before the sunrise and evening session after sunset. There were struggles along the way, countless injuries, I shed a lot of tear and pain but be a runner teach me to overcome those obstacles and fight hard to reach my goals – After two months of intensive training, I ran full marathon in <a targer="_blank" href="http://www.runpix.info/arace7/00/finord_one.php?id=10912&ev=sin12&dt=42">3 hours 57 minutes</a> – all the hard work paid off, after crossed the finish line, I put up a fist in the air with victory and said to myself ‘Hell yeah, I really made it’',
            image:{position:'bottom', url:'b2.jpg'}
          },
          {
            question: 'Background',
            answer:'Graduated from National University of Singapore, BA in Geography (It’s more than a Map and City, if you happened to be curious about). Currently working full-time at The Embassy of India, Vientiane as Interpreter and Social Secretary to Ambassador, I’ve been working there for one and half years now.  With a sidekick working part time as Chief Translator for Oh! Magazine.  I’m also social activist – an active volunteer and coordinator based in Laos, connecting resources to the needy and giving back to the local community. Currently working with the Oversea Community Involvement Program from King Edward VII Hall from Singapore, our target group at the moment is child development in rural area.  I’ve been doing Volunteer work for many years, working on different projects in different countries, counting from animal welfare in Indonesia and Singapore to social development and child development in Laos. I’m also a long distance learner, currently enrolling in Pre-Certificate Paramedic Course at the Australian Paramedical College.',
            image:{position:'right', url:'b3.jpg'}
          },
          {
            question: 'Volunteering Work',
            answer:'In 2010, we gathered together and set up a donation group called ‘Lao Help Lao’, we collected stuff like clothes, stationary, sport equipment and some construction supply then took a trip up to Vangvieng and donated those things to one of the local school in the village.  It was great, everyone seems to be happy and appreciated our donation, but what next? I think about it all over again, after the trip there was nothing that we actually did for them, only donated things – which to me, it is no different to toss the coin to others – It made little and short term impact to the community with no future improvement. Of course I am not against donation; the culture of giving is good thing. But one has to consider what impact that it brings along. The point is Volunteering should be an experience that create long lasting impact, bringing improvement to the community rather than creating a culture of dependency to the host party.' +
            '<br/><br/>The best way to understand what the real problem is, you have to go down and experience it yourself,  this is how I approach the term as a Volunteer, to be able to put your hand on it, spend your time study and understand them.  So in 2011, I decided to join Youth Expedition Project called Project Orange – I spent about two and half weeks in Manado, North Sulawesi of Indonesia as a Volunteer at Tasikoki Wildlife Rescue Center.  I learned so much about wildlife animals; I spent quality time study about them, learning how to build enrichment, understand how it is important to protect and preserve them in the wild and their role to the local community.',
            image:{position:'none', url:'b4.jpg'}
          },
          {
            quote: 'You never really understand a person until you consider things from his point of view, until you climb into his skin and walk around in it',
            answer:'',
            image:'',
            author: 'Harper Lee in To Kill a Mockingbird'
          },
          {
            question: 'Are you still continuing?',
            answer: 'Currently, I continue to volunteer with Overseas Community Involvement Program (OCIP) with King Edward VII Hall since 2012, and the host country is Laos. There are a lot of challenges working as an Independent Volunteer, my previous volunteer experiences were all collaborated with already established organization, but this time I am on my own sorting out for schools, location, logistics, recruiting other local volunteer who interested in joining the program and providing all necessarily resources to the funder. I learned so much by going down to the rural community and talking to the people of their needs, finding out potential ways that can help improving the community for the better. Our aim is to help build better facilities for elementary school, including fences, water system, and toilet and conducting Basic English Language lesson, and help the kid experience and explore other culture. At the same time, we also create a volunteer tourism program, providing host family programs that volunteer participants can experience our lifestyle and culture while spending time in Laos. ',
            image:{position:'none', url:'b4.jpg'}
          },
        ]
      },
      'Nilada': {
        quote: 'Don’t give up before you even try',
        image: 'nila.jpg',
        topics : [
          {name:'Danu',quote:'Learn the hard way and fight easy',image:'danu.jpg'},
          {name:'Chitpaseuth',quote:'Risk more, reflect more and leave a legacy',image:'chitpaseuth.jpg'},
          {name:'Khatthanam',quote:'A Vision without execution is an hallucination',image:'khatthanam.jpg'},
          {name:'Ricky',quote:'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',image:'ricky.jpg'},
        ],
        projects : [
          {name:'Peace Project in Australia'},
          {name:'ອະນາຄົດ.com'}
        ],
        workplaces : [
          {name:'Private Company'}
        ],
        schools : [
          {name:'Limkokwing University of Creative Technology, Malaysia'}
        ],
        qualifications : [
          {name:'International Business'},
          {name:'Interpreter and translator'},
        ],
        interests : [
          {name:'Investment'},
          {name:'Business'}

        ],
        circles : [
          {name:'Ricky', image:'ricky.jpg'},
          {name:'Khatthanam', image:'khatthanam.jpg'},
          {name:'Chitpaseuth', image:'chitpaseuth.jpg'},
          {name:'Danu', image:'danu.jpg'},
        ],
        infos : [
          {
            question: 'Tell us about yourself briefly. Who are you?',
            answer:'My name is Nilada Phengmeuang. I grew up in Laos and spent most of my life here. I would gladly call this place my home. I finished my undergraduate degree in International Business at Limkokwing University of Creative Technology, Malaysia with GPA 3.96/4. I now have a plan to further my studies in the same business field, but scrutinising more in the arts of communication.',
            image:{position:'none', url:'n1.jpg'}
          },
          {
            question: 'What are you doing now?',
            answer:'My primary day job right now is working for an Australian company for its peace project in Laos. Due to the fact that the company does not have an office in Laos, my role therefore covers a wide range of expertise including auditing, book keeping, graphic designing, marketing and research. Basically the job requires me to pitch this peace project to international investors in the region into joining our project of creating the biggest peace museum in the world situating in Australia. Currently, we are progressing swiftly at the beginning stage and expecting to move on to the next stage in the near future.' +
            '<br/><br/>Apart from all those things, I am also undertaking other projects simultaneously. I am a pioneer assistant at another private company, a part-time interpreter and translator in Chinese, English, Malay, Vietnamese and Lao. And to be frank, I have not even listed up to half of what I am currently doing right now. The thing is, I am trying out a lot of new things, experiencing the industry along the way and slowly rising up to reach my ultimate goal.',
            image:{position:'none', url:'n1.jpg'}
          },
          {
            quote: 'Don’t give up before you even try',
            answer:'',
            image:'',
            author: ''
          },
          {
            question: 'Please share with us your goals',
            answer:'My goal is to be a successful businesswoman, be able to stand firm on my own feet and take care of my family. All my life, I have always hear people looking down on women, judging us by gender and not by quality, assuming us to live a simple life and find an opposite-sex partner to take care of everything. I disagree with that statement and I am going to prove it wrong.',
            image:{position:'left', url:'n1.jpg'}
          },
          {
            question: 'Why are you doing all this? What is your real motivations?',
            answer:'Honestly, I cannot put into words exactly why I am doing all these. But ever since I could remember, I have always been craving for new experience, for the knowledge of investment and business. I like the feeling I get every time I get to talk to people, to sell them my ideas and to convince them. In high school, I used to rent a store in a village, selling cosmetic products with customers from around the village, school friends, relatives which garnered me a word-of-mouth customers. It went perfectly smooth for a part-time store owner such as myself, though the margin was not high, it was one of the initiative that I first took in becoming who I am today.' +
            'I guess I could say that my underlying motivation is the striving to be able to earn a living for myself, on my own, independently without a boss of me. The challenges of figuring out market’s supply and demand and of fulfilling customer’s needs are just factors that really excite me the most for the longest time and that I could never stop thinking about.',
            image:{position:'right', url:'n2.jpg'}
          },
        ]
      },
      'Danu': {
        quote: 'Learn the hard way and fight easy',
        image: 'danu.jpg',
        topics : [
          {name:'Nilada',quote:'Don’t give up before you even try',image:'nila.jpg'},
          {name:'Chitpaseuth',quote:'Risk more, reflect more and leave a legacy',image:'chitpaseuth.jpg'},
          {name:'Khatthanam',quote:'A Vision without execution is an hallucination',image:'khatthanam.jpg'},
          {name:'Ricky',quote:'Nothing is useless, all skills are in demand, though the demand may varied according to space and time.',image:'ricky.jpg'},
        ],
        projects : [
          {name:'ອະນາຄົດ.com'}
        ],
        workplaces : [
          {name:'United Overseas Bank Singapore'}
        ],
        schools : [
          {name:'Management Development Institute of Singapore'}
        ],
        qualifications : [
          {name:'Banking and Finance'}
        ],
        interests : [
          {name:'Football'}

        ],
        circles : [
          {name:'Ricky', image:'ricky.jpg'},
          {name:'Khatthanam', image:'khatthanam.jpg'},
          {name:'Chitpaseuth', image:'chitpaseuth.jpg'},
          {name:'Nilada', image:'nila.jpg'},
        ],
        infos : [
          {
            question: 'Please share with us who you are.',
            answer:'My name is Danusone Inthavong. Most people know me by the name Danu. Right now I am working at United Overseas Bank Singapore at the Privilege Banking department.',
            image:{position:'none', url:'k1.jpg'}
          },
          {
            quote: 'Learn the hard way and fight easy',
            answer:'',
            image:'',
            author: ''
          }
        ]
      }
    };

    return {
      getAll: function () {
        return data;
      }
    };
    */
  });
