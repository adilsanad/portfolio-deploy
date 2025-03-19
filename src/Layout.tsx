import Footer from "./common/Footer";
import pageendmarker from './assets/pageender.svg'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-8 md:grid-cols-16 w-full bg-[#151515]">
      <main className="col-span-full">{children}</main>
      <div className="col-span-full flex justify-center items-center gap-4 py-32">
        <svg className="hover:rotate-180 transition-all" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="8" fill="#4F78FF" />
        </svg>
        <svg className="hover:rotate-60 transition-all" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.1243 2.06901C7.76861 0.327774 10.2314 0.327774 10.8757 2.06901L12.057 5.26138C12.2596 5.80882 12.6912 6.24044 13.2386 6.44301L16.431 7.6243C18.1722 8.26861 18.1722 10.7314 16.431 11.3757L13.2386 12.557C12.6912 12.7596 12.2596 13.1912 12.057 13.7386L10.8757 16.931C10.2314 18.6722 7.76861 18.6722 7.1243 16.931L5.94301 13.7386C5.74044 13.1912 5.30882 12.7596 4.76138 12.557L1.56901 11.3757C-0.172226 10.7314 -0.172226 8.26861 1.56901 7.6243L4.76138 6.44301C5.30882 6.24044 5.74044 5.80882 5.94301 5.26138L7.1243 2.06901Z" fill="#E4AD54" />
        </svg>
        <svg className="hover:-rotate-60 transition-all" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.27767 21.2498C5.78093 21.2498 4.81455 19.666 5.49912 18.335L11.2215 7.20902C11.9657 5.76202 14.0343 5.76202 14.7785 7.20903L20.5009 18.335C21.1855 19.666 20.2191 21.2498 18.7223 21.2498H13H7.27767Z" fill="#FF5858" />
        </svg>

      </div>
      <Footer id='contact' />
    </div>
  );
};

export default Layout;
