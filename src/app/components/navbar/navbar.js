export default function NavBar(){
    return(
        <nav className="bg-black p-4 flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 rounded-lg dark:bg-white p-2" viewBox="0 0 512 104">
              <path d="M429.543.043v16.46h-35.377V103.1h-17.69V16.504h-36.114V.043zm3.977 93.24c1.246 0 2.336.448 3.259 1.346c.936.897 1.402 1.972 1.415 3.224a4.5 4.5 0 0 1-.66 2.327a4.8 4.8 0 0 1-1.714 1.665a4.4 4.4 0 0 1-2.3.626c-1.296 0-2.398-.449-3.32-1.346c-.923-.898-1.38-1.985-1.368-3.272q-.017-1.878 1.368-3.224c.922-.898 2.024-1.346 3.32-1.346M82.916 103.1L17.69 22.028v81.03H0V0h22.111l82.406 102.329l.001-85.825l-.007-16.461h89.18v16.46h-71.484v26.48h57.488v16.461h-57.488V86.64h71.485v16.46zm167.469-43.813L261.978 73.7l-23.755 29.522h-23.215zM238.223.086l29.93 37.17L297.989.2l23.15-.035l-41.396 51.485l41.463 51.493h-23.217L215.074.086zm225.488 58.97h7.838v30.2c-.011 2.775-.612 5.148-1.785 7.145c-1.187 1.995-2.83 3.519-4.938 4.594c-2.098 1.062-4.555 1.606-7.348 1.606c-2.553 0-4.841-.46-6.879-1.358s-3.655-2.244-4.842-4.016c-1.2-1.771-1.787-3.98-1.787-6.625h7.852c.012 1.157.275 2.16.778 3a5 5 0 0 0 2.086 1.924q1.348.675 3.091.674c1.26 0 2.338-.26 3.213-.792q1.312-.78 2.014-2.338c.455-1.028.695-2.303.707-3.815zm40.09 11.81c-.19-1.83-1.03-3.26-2.492-4.275c-1.475-1.028-3.38-1.535-5.718-1.535c-1.64 0-3.055.248-4.23.732c-1.174.496-2.085 1.157-2.709 1.996c-.622.838-.934 1.795-.959 2.87c0 .897.216 1.677.635 2.326a5.2 5.2 0 0 0 1.714 1.666a11.5 11.5 0 0 0 2.398 1.145q1.33.46 2.66.78l4.087 1.004c1.643.378 3.237.885 4.759 1.535c1.521.638 2.9 1.453 4.11 2.433q1.817 1.47 2.877 3.543c.707 1.382 1.067 3 1.067 4.866c0 2.515-.647 4.724-1.954 6.637c-1.306 1.902-3.188 3.39-5.657 4.465c-2.457 1.063-5.43 1.606-8.929 1.606c-3.38 0-6.328-.52-8.81-1.559c-2.492-1.027-4.434-2.54-5.837-4.524s-2.157-4.405-2.265-7.251h7.768c.107 1.488.587 2.728 1.402 3.732c.826.992 1.905 1.724 3.224 2.22c1.33.485 2.816.733 4.458.733c1.714 0 3.224-.26 4.53-.768c1.295-.508 2.313-1.216 3.045-2.138c.743-.91 1.115-1.984 1.127-3.212c-.012-1.122-.349-2.055-.996-2.788q-.989-1.098-2.733-1.842c-1.173-.496-2.54-.945-4.098-1.334l-4.962-1.252c-3.584-.91-6.424-2.291-8.498-4.146c-2.085-1.854-3.116-4.31-3.116-7.393c0-2.527.695-4.748 2.098-6.65c1.39-1.9 3.296-3.377 5.705-4.428c2.42-1.063 5.154-1.583 8.197-1.583c3.093 0 5.801.52 8.139 1.583c2.336 1.051 4.171 2.515 5.5 4.381c1.331 1.867 2.027 4.004 2.063 6.425z" />
            </svg>
            <section className="flex justify-center items-center">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:hidden" viewBox="0 0 24 24">
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path fill="white" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
                </g>
                </svg>
              </button>
              <section className="hidden sm:flex sm:justify-center sm:items-center sm:gap-5">
                <button>
                  Home
                </button>
                <button>
                  Pages
                </button>
                <button>
                  Services
                </button>
                <section className="flex gap-3 font-semibold">
                  <button className="bg-white text-black py-2 px-4 rounded-full">
                    Sign in
                  </button>
                  <button className="bg-white text-black py-2 px-4 rounded-full">
                    Login
                  </button>
                </section>
              </section>
            </section>
          </nav>
    )
};