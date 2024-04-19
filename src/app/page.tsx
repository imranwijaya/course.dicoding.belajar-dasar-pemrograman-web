import Image from "next/image";
import userImage from "../../public/user-image.png";
import { blogs, projects } from "./_content";

export default function Home() {
  return (
    <>
      <div id="content" className="w-full lg:w-8/12 flex flex-col gap-4">
        {projects.map((e, idx) => (
          <article
            key={idx}
            className="flex flex-col gap-x-6 gap-y-4 rounded-xl bg-white p-4 lg:flex-row lg:p-6"
          >
            <figure className="relative my-auto aspect-square w-full overflow-hidden rounded-xl hover:shadow-md lg:w-2/5">
              <Image
                src={e.image}
                alt={e.imageAlt}
                className="aspect-square rounded-xl object-cover object-left-top transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                priority={idx === 0}
              />
            </figure>
            <div className="w-full space-y-4 lg:w-3/5 lg:space-y-6">
              <div className="w-full space-x-2 break-words">
                {e.tag.map((el, i) => (
                  <span
                    key={i}
                    className={`select-none text-sm font-medium lg:text-base cursor-not-allowed text-[#2F80ED]`}
                  >
                    #{el}
                  </span>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#333333]">
                  {e.title}
                </h3>
                <p className="break-words text-sm font-medium text-[#828282] lg:text-base">
                  {e.description}
                </p>
              </div>
              <div className="flex flex-row justify-center gap-x-3 lg:justify-normal">
                <a
                  href={e.hrefDemo}
                  className="rounded-xl bg-[#2F80ED] px-9 py-2"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span className="text-base font-medium text-white lg:text-lg">
                    Demo
                  </span>
                </a>
                <a
                  href={e.hrefCode}
                  className="rounded-xl border border-[#2F80ED] px-9 py-2"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span className="text-base font-medium text-[#2F80ED] lg:text-lg">
                    Code
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
        {blogs.map((e, idx) => (
          <article
            key={idx}
            className="flex flex-col gap-x-6 gap-y-4 rounded-xl bg-white p-4 lg:flex-row-reverse lg:items-center lg:justify-between lg:p-6 lg:pr-0"
          >
            <div className="w-full flex-none lg:w-1/2">
              <Image
                src={e.image}
                alt={e.imageAlt}
                className="aspect-video w-full rounded-xl object-cover lg:rounded-r-none"
              />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#333333]">
                  {e.title}
                </h3>
                <p className="text-sm font-medium text-[#828282] lg:text-base">
                  {e.description}
                </p>
              </div>
              <div className="flex flex-row justify-normal gap-x-3">
                <a
                  href={e.href}
                  className="pt-2 text-[#2F80ED]"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {e.hrefName}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="lg:w-4/12">
        <div className="p-2 rounded-xl bg-white w-full">
          <figure>
            <Image
              src={userImage}
              alt="user image"
              className="aspect-square w-full rounded-xl object-cover object-top"
              priority
            />
          </figure>
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold">Billy Pearson</h3>
              <p className="text-lg font-medium text-[#828282]">
                Front-end developer
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-medium">billy@example.com</div>
              <div className="text-lg font-medium">(+603) 546 624 342</div>
            </div>
            <div className="text-lg font-medium text-[#828282]">
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
