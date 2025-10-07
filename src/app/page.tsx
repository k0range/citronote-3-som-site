"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import logo from "../assets/logo.svg";
import icon from "../assets/icon.svg";
import foursquare from "../assets/4square.svg";
import globe from "../assets/globe.svg";
import notetypes from "../assets/notetypes.png";
import markdown from "../assets/markdown.png";
import fs from "../assets/fs.png";
import RoundCorner from "@/components/RoundCorner";
import recordOrganize from "../assets/record-organize.png";
import sometimes from "../assets/sometimes.png";
import buried from "../assets/buried.png";
import whatif from "../assets/whatif.png";
import scrap from "../assets/scrap.png";
import services from "../assets/services.png";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";

import { CloudIcon, CodeBracketIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, DocumentDuplicateIcon, GlobeAltIcon, MagnifyingGlassIcon, PuzzlePieceIcon, QuestionMarkCircleIcon, RocketLaunchIcon, SparklesIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { sendGAEvent } from "@next/third-parties/google";

function downloadURI(uri: string, name: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Home() {
  const [hideHeader, setHideHeader] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const rect = mainContentRef.current?.getBoundingClientRect();
      if (!rect) return;
      const scrollTop = window.scrollY || window.pageYOffset;
      const elementTop = rect.top + scrollTop - 300;

      if (window.scrollY > elementTop) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    handleScroll(); // 開いたときにすでにスクロールされている場合があるため

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="bg-[#212121] min-h-screen text-white">
      <div
        className={`fixed top-0 w-full transition-opacity duration-500 ${
          hideHeader ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="bg-[#212121] py-10 h-45 text-center flex flex-col justify-center items-center">
          <Image src={logo} className="h-11 inline" alt="Citronote 3" />
          <div className="text-white mt-4 text-sm">
            Beta Preview for Hack Club: Summer of Making
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex justify-between">
          <RoundCorner className="text-[#212121] h-8" />
          <RoundCorner className="text-[#212121] h-8 rotate-90" />
        </div>
      </div>

      <div className="mt-28 pt-22 max-w-7xl mx-auto bg-[#2a2a2a] py-4 min-h-screen px-14">
        <div className="max-w-4xl w-full mx-auto">
          <div className="h-[calc(100vh-2.75rem-10rem)] flex flex-col justify-center pb-14">
            <Image src={recordOrganize} className="h-34 sm:h-48 w-auto mb-10 sm:mb-13 mx-auto" alt="File and Folders" />
            <div className="text-3xl sm:text-4xl tracking-wide leading-12 ">For us, recording and organizing things is essential.</div>
          </div>
          <div className="h-[calc(100vh-2.75rem-10rem)] flex flex-col justify-center pb-14">
            <Image src={sometimes} className="h-34 sm:h-48 w-auto mb-10 sm:mb-13 mx-auto" alt="Long and single line notes" />
            <div className="text-3xl sm:text-4xl tracking-wide leading-12">Sometimes it’s a long, structured document; other times it’s just a single line that comes to mind.</div>
          </div>
          <div className="h-[calc(100vh-2.75rem-10rem)] flex flex-col justify-center pb-14">
            <Image src={services} className="h-34 sm:h-48 w-auto mb-10 sm:mb-13 mx-auto" alt="Scattered notes" />
            <div className="text-3xl sm:text-4xl tracking-wide leading-12">But our information is always scattered across folders and services.</div>
          </div>
          <div className="h-[calc(100vh-2.75rem-10rem)] flex flex-col justify-center pb-14">
            <Image src={buried} className="h-34 sm:h-48 w-auto mb-10 sm:mb-13 mx-auto" alt="" />
            <div className="text-3xl sm:text-4xl tracking-wide leading-12">Even an important idea from one day can end up buried somewhere before we realize it.</div>
          </div>
          <div className="h-[calc(100vh-2.75rem-10rem)] flex flex-col justify-center pb-14">
            <Image src={whatif} className="h-34 sm:h-48 w-auto mb-10 sm:mb-13 mx-auto" alt="" />
            <div className="text-3xl sm:text-4xl tracking-wide leading-12">What if there were a single place where you could keep ideas, notes, and everything you love?</div>
          </div>
          <div className="h-[calc(100vh-2.75rem-10rem)] flex flex-col justify-center pb-50">
            <div className="text-3xl sm:text-4xl tracking-wide leading-12">Could a <span className="text-[#FFB011]">powerful note-taking app</span> that stores all kinds of information become that place?</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-b from-[#FFB011] via-[#D99100] to-[#D99100] min-h-screen text-white text-center py-16" ref={mainContentRef}>
      <div className="max-w-6xl mx-auto px-8 sm:px-14">
        <Image src={icon} className="h-24 inline" alt="Citronote 3" />
        <h2 className="text-3xl mt-6 tracking-wide font-semibold leading-11">Citronote 3 is a powerful notes app<br />that can <span className="underline underline-offset-3">save anything</span></h2>
        <div className="opacity-70 text-sm mt-3 mb-16 tracking-widest">BETA PREVIEW FOR SUMMER OF MAKING</div>

        <video controls className="aspect-video h-full max-h-[28rem] mx-auto rounded-4xl">
          <source src="/trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">Features</h3>
        <div className="flex mb-9">
          <div className="mr-5.5 sm:mr-8 min-w-16 sm:min-w-30 w-33">
            <Image src={notetypes} className="min-w-16 sm:min-w-20 w-33 h-auto drop-shadow-lg" alt="Note Types" />
          </div>
          <div className="flex-grow text-left">
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Note Types</h4>
            <p className="tracking-wide">With Citronote, you don't have to record all your information using the same simple toolbar!</p>
            <p className="tracking-wide">There are dedicated UIs optimized for each purpose, allowing you to capture information efficiently and effortlessly.</p>
          </div>
        </div>
        <div className="flex mb-9">
          <div className="mr-5.5 sm:mr-8 min-w-16 sm:min-w-30 w-33">
            <Image src={markdown} className="min-w-16 sm:min-w-20 w-32 h-auto drop-shadow-lg rotate-9" alt="Markdown syntaxs" />
          </div>
          <div className="flex-grow text-left">
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Markdown</h4>
            <p className="tracking-wide">Markdown is familiar to developers, right? You can format your notes just by surrounding text with a few simple symbols!</p>
            <p className="tracking-wide">Also, Citronote comes with a WYSIWYG editor, so you can work on your notes without any distinction between editing and previewing. </p>
          </div>
        </div>
        <div className="flex mb-9">
          <div className="mr-5.5 sm:mr-8 min-w-16 sm:min-w-30 w-33">
            <Image src={fs} className="min-w-16 sm:min-w-20 w-32 -rotate-6 h-auto drop-shadow-lg" alt="Folder image" />
          </div>
          <div className="flex-grow text-left">
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Filesystem based</h4>
            <p className="tracking-wide">Citronote treats folders on your computer as "notebooks."</p>
            <p className="tracking-wide">The contents of the notes are in .md or .txt formats, so they can be handled naturally with other software and file managers.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5.5 sm:mr-8 min-w-16 sm:min-w-30 w-33">
            <Image src={scrap} className="min-w-16 sm:min-w-20 sm:w-32 -rotate-8 h-auto drop-shadow-lg" alt="Scrap image" />
          </div>
          <div className="flex-grow text-left">
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Scrap</h4>
            <p className="tracking-wide">Citronote has a notetype called Scrap.</p>
            <p className="tracking-wide">This allows you to keep your thoughts and records in chronological order, like a chat or message. (Surely I'm not the only person who's used a solo chat room for taking notes!)</p>
          </div>
        </div>

        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">Technical appeal points</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <PuzzlePieceIcon className="h-12 w-12 text-white -ml-1" />
            <div className="text-xl font-semibold mt-2 mb-1">Extensible design</div>
            <p>The Citronote codebase is designed with a strong focus on extensibility.</p>
            <p>For example, note types are managed through a core registry that allows them to be injected externally. This makes it easy to add new note types or extend existing functionality in a flexible way, while also paving the way for a future plugin system to be implemented seamlessly.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <Squares2X2Icon className="h-12 w-12 text-white -ml-1" />
            <div className="text-xl font-semibold mt-2 mb-1">Monorepo</div>
            <p className="">Citronote is a pnpm-based monorepo with separate packages for the React app, Electron desktop app, core logic, utilities, and UI components.</p>
            <p>This structure allows flexible code sharing, such as reusing logic for a future mobile app or sharing UI components in a plugin system.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <CodeBracketIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Tech Stack</div>
            <p className="">Citronote leverages a modern tech stack, including React 19, Vite, Zustand, Tailwind CSS, Electron, and TypeScript.</p>
            <p>Looking ahead, we are also considering migrating from Electron to Tauri in the future.</p>
          </div>
        </div>

        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">Story</h3>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2022 and earlier</div>
              <div className="mt-1">Back then (I was around 11 years old), I was searching for a good note-taking app for PC. Every app I tried seemed to have pros and cons, but none felt like the "perfect fit." That's when I decided to build one myself - the beginning of this project.</div>
              <div className="mt-0.5">I sketched out ideas, concepts, logos, and UI designs on paper and on my computer.</div>
              <div className="mt-0.5 mb-6">It was probably around this time that I also came up with the core concept: <i>"an app where you can save anything."</i></div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">Date unknown</div>
              <div className="mt-1">After coming up with the idea, I immediately tried creating a prototype.</div>
              <div className="mt-0.5">At first, I chose Electron (a framework for building desktop apps with web technologies) and SimpleMDE as the editor. I didn't know about frameworks, nor did I consider using them.</div>
              <div className="mt-0.5">However, I struggled with handling files via Electron's IPC and eventually gave up.</div>
              <div className="mt-0.5">I tried a few more times after that but never managed to finish.</div>
              <div className="mt-0.5 mb-6">On the bright side, around this time I also began web-focused development and learned frameworks like Vue.</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2023 October</div>
              <div className="mt-1">One day, while looking through old files, I found the Citronote logo I had designed before. That discovery reignited my motivation, and I decided to try again. This time, I used JavaScript, Vue, Electron, and Tailwind CSS.</div>
              <div className="mt-0.5 mb-6">By the way, I was hospitalized at the time, so I actually had plenty of time to work on it.</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2023 November</div>
              <div className="mt-1">After much trial and error, I finally released the first version (v1) of Citronote!</div>
              <div className="mt-0.5">Although I had attempted many personal projects before, this was the first one I actually completed and published.</div>
              <div className="mt-0.5 mb-6">That said, due to my limited skills, I had to compromise on many of the original concepts and features.</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2023 November onwards</div>
              <div className="mt-1">With the app completed, my next thought was: "Now I want people to use it!"</div>
              <div className="mt-0.5">I wrote posts for blogs, submitted it to Product Hunt (a platform where individuals and startups share their products), and even published it to the Microsoft Store.</div>
              <div className="mt-0.5">However, I was only 12 years old at the time, which meant I couldn't use many social platforms like X due to age restrictions. This limited my ability to promote the app.</div>
              <div className="mt-0.5 mb-6">As a result, Citronote didn't become a big hit like some indie maker success stories, but it still grew into a small app with real users and real demand.</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2024 March</div>
              <div className="mt-1">A while after release, I wanted to add new features in an update.</div>
              <div className="mt-0.5">But then I realized the codebase was a mess—almost everything was crammed into a giant App.vue, with no thought for maintainability.</div>
              <div className="mt-0.5 mb-6">So I decided to remake it from scratch with a cleaner foundation, while reusing some components and features. This became Version 2. (v2)</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2024 August</div>
              <div className="mt-1">After releasing v2, I felt burnt out and stepped away from Citronote for a while, working instead on developing a social network.</div>
              <div className="mt-0.5">But when I later revisited the Citronote code, I realized… it was terrible again. (Yes, déjà vu!)</div>
              <div className="mt-0.56">Still, with what I had learned from the social network project, I believed I could finally build a more maintainable codebase and truly realize the concepts I had once compromised. So I drafted a plan for Version 3. (v3)</div>
              <div className="mt-0.5 mb-6">Unfortunately, that plan never made it past the planning stage.</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="flex-grow bg-white/50 rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2025 June</div>
              <div className="mt-1 mb-6">I came across Hack Club's Summer of Making, and that gave me the motivation I needed to finally restart Citronote. I decided to pick up the long-abandoned remake plan and get back to work.</div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="w-7 h-7 rounded-full bg-white text-[#D3910A] flex items-center justify-center text-md font-bold mr-6 mb-2"></div>
              <div className="h-full bg-gradient-to-b from-white/50 to-transparent rounded-full w-[5px] mx-3"></div>
            </div>
            <div className="text-left flex-grow pt-0.5">
              <div className="font-semibold italic">2025 September</div>
              <div className="mt-1 mb-6">At last, I shipped the preview version of the new Citronote for Summer of Making. It was my first time building a large-scale app, so it was quite challenging. For now, due to time constraints, it's limited to simple features, but stay tuned for more to come!</div>
            </div>
          </div>
        </div>

        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">Future Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <CloudIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Cloud sync</div>
            <p>We’re planning a cloud service for Citronote that lets you save your notebooks online and sync them across devices. It’s an idea we’ve had for a long time, and we definitely want to bring it to life someday!</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <MagnifyingGlassIcon className="h-12 w-12 text-white -ml-1" />
            <div className="text-xl font-semibold mt-2 mb-1">Search & Tag</div>
            <p>The ability to search notes, and categorize your notes using tags. Currently, this is not possible due to time constraints, but we plan to implement it ASAP.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <SparklesIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">AI Feature</div>
            <p className="">I'am very interested in integrating AI into Citronote and plan to develop it as a related service.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <PuzzlePieceIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Plugin system</div>
            <p>Our plan is to let users create and install plugins, giving them the ability to customize and extend Citronote’s features!</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <DevicePhoneMobileIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Mobile version</div>
            <p>Alongside the desktop version, we plan to develop a mobile version as well. While there are several challenges ahead, we consider it an essential step. To prepare for this, we are already designing the codebase with future mobile support in mind.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <ComputerDesktopIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Other Platform</div>
            <p className="">At the moment, the app is available on Windows and in the browser. In the future, we would like to expand support to macOS and Linux as well, though I currently don't have access to a Mac device.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <GlobeAltIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Expanding Languages</div>
            <p>At the moment, English and Japanese are supported (although this deployment is limited to English). We aim to expand to many more languages in the future, and are exploring how LLMs could assist with translations.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <DocumentDuplicateIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">More Notetypes</div>
            <p>We’re looking to expand the variety of note types. Some ideas currently under consideration include Tasks (for Kanban-style task management), Canvas (for sketches and drawings), Bookmarks (to save websites), and Voice Memos.</p>
          </div>
          <div className="text-left border-2 border-white rounded-2xl p-6 sm:border-0 sm:p-0 sm:rounded-none">
            <RocketLaunchIcon className="h-12 w-12 text-white" />
            <div className="text-xl font-semibold mt-2 mb-1">Stay tuned...</div>
            <p>There is much more to come for the future of Citronote!</p>
          </div>
        </div>

        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">Try Citronote</h3>
        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="bg-white rounded-2xl text-[#D3910A] p-8 text-left sm:max-w-1/2">
            <Image src={foursquare} className="h-9 w-9 mb-6" alt="Windows Icon" />
            <h4 className="text-2xl mb-2.5 font-semibold tracking-wide">Citronote 3 for Windows</h4>
            <p className="tracking-wide mb-4">At the moment, it is released as an MVP with simple functions.</p>
            <button className="bg-[#D3910A] text-white rounded-full px-6 py-2.5 font-semibold hover:bg-[#bd810a] cursor-pointer transition" onClick={() => {
              sendGAEvent('exeDownloaded');
              downloadURI("setup.exe", "Citronote 3 Beta Installer.exe");
            }}>Download Installer</button>
            <button className="block text-sm mt-3 border-b font-semibold hover:text-[#bd810a] duration-200 cursor-pointer"
            onClick={() => {
              sendGAEvent('portableDownloaded');
              downloadURI("portable.exe", "citronote-3-beta-portable.exe");
            }}
            >Download Portable (experimental)</button>
            <div className="text-xs mt-4">* You may see a warning like "Windows has protected your PC", but this is because the exe file is not digitally signed. If you downloaded the exe from korange.work, it is safe. If you're worried, you can also scan the file with something like VirusTotal.</div>
          </div>
          <div className="rounded-2xl p-8 text-left border-2 border-white sm:border-0 sm:max-w-1/2">
            <Image src={globe} className="h-9 w-9 mb-6" alt="Globe icon" />
            <h4 className="text-2xl mb-2.5 font-semibold tracking-wide">Try it in your browser</h4>
            <p className="tracking-wide mb-1.75">If you don't have a Windows machine, you can also try Citronote in your browser.</p>
            <p className="tracking-wide mb-4 text-sm font-semibold">However, you'll likely get a better experience on Windows, so we recommend doing so whenever possible.</p>
            <button className="bg-white text-[#d3910a] rounded-full px-6 py-2.5 font-semibold cursor-pointer transition" onClick={() => {
              sendGAEvent('tryInBrowserClicked');
              window.open("https://som.stg.citronote.korange.work/notebook_selector.html", "_blank");
            }}>Try in browser</button>
            <div className="text-xs mt-4">* We recommend using Chrome or a Chromium-based browser. Firefox does not work due to the Web API.</div>
          </div>
        </div>
        <div className="flex items-center">
          <QuestionMarkCircleIcon className="h-5 w-5 min-w-5 text-white mr-2 mt-4" />
          <div className="text-left text-sm mt-4">If you notice anything unusual or have any feedback, please send it <a className="underline" href="https://forms.gle/BHxbxJph5AQi7bfk9">here</a>.</div>
        </div>

        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">Newsletter</h3>
        <p className="text-left text-lg mb-4">Sign up for our newsletter to stay updated on the latest news and updates about Citronote 3.</p>
        <SubscribeNewsletter className="mb-32" />

        { /*
        <h3 className="text-left mt-24 text-4xl font-semibold mb-8">FAQ</h3>
        <div className="space-y-6 text-left mb-32">
          <div>
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Is Citronote 3 free to use?</h4>
            <p className="tracking-wide">Yes, Citronote 3 is completely free to use. We believe in providing powerful tools without any cost barriers.</p>
          </div>
          <div>
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Where can I download Citronote 3?</h4>
            <p className="tracking-wide">You can download the Windows installer from the "Try Citronote" section above.</p>
          </div>
          <div>
            <h4 className="text-2xl mb-2 font-semibold tracking-wide">Is there a mobile version of Citronote 3?</h4>
            <p className="tracking-wide">Currently, Citronote 3 is only available for Windows. However, we are working on mobile apps for iOS and Android.</p>
          </div>
        </div>*/ }
      </div>
    </div>
    <footer className="bg-[#212121] text-white text-center py-8 px-4 text-sm">
      <div className="max-w-2xl mx-auto tracking-wider leading-7">
        <div>Made with ♥️ and 🔥 by <a href="https://x.com/korange753/" className="underline">Korange</a> (14 y/o, Japan)</div>
        <div className="text-xs mt-2 opacity-80">Contact: korange753[at]gmail.com</div>
      </div>
    </footer>
    </>
  );
}
