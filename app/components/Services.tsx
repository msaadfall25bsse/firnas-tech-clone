import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  // Card 1: Web Development
  {
    href: "https://firnas.tech/our-services/web-development/",
    title: "Web Development",
    description:
      "We create software, from customized creation to system updates, that improves operational efficiency and fosters creativity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        className="text-white"
      >
        <path
          d="M30.0002 6C30.0002 5.46957 29.7894 4.96086 29.4144 4.58579C29.0393 4.21071 28.5306 4 28.0002 4H13.4102L15.4102 6H30.0002Z"
          fill="currentColor"
        />
        <path
          d="M14.29 7.71L10.59 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V26C2 26.5304 2.21071 27.0391 2.58579 27.4142C2.96086 27.7893 3.46957 28 4 28H28C28.5304 28 29.0391 27.7893 29.4142 27.4142C29.7893 27.0391 30 26.5304 30 26V8H15C14.8684 8.00076 14.7379 7.97554 14.6161 7.92577C14.4943 7.87601 14.3834 7.80268 14.29 7.71ZM5 8C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6C5.26522 6 5.51957 6.10536 5.70711 6.29289C5.89464 6.48043 6 6.73478 6 7C6 7.26522 5.89464 7.51957 5.70711 7.70711C5.51957 7.89464 5.26522 8 5 8ZM8 7C8 6.73478 8.10536 6.48043 8.29289 6.29289C8.48043 6.10536 8.73478 6 9 6C9.19778 6 9.39112 6.05865 9.55557 6.16853C9.72002 6.27841 9.84819 6.43459 9.92388 6.61732C9.99957 6.80004 10.0194 7.00111 9.98079 7.19509C9.9422 7.38907 9.84696 7.56725 9.70711 7.70711C9.56725 7.84696 9.38907 7.9422 9.19509 7.98079C9.00111 8.01937 8.80004 7.99957 8.61732 7.92388C8.43459 7.84819 8.27841 7.72002 8.16853 7.55557C8.05865 7.39112 8 7.19778 8 7ZM12.69 19.29C12.7837 19.383 12.8581 19.4936 12.9089 19.6154C12.9597 19.7373 12.9858 19.868 12.9858 20C12.9858 20.132 12.9597 20.2627 12.9089 20.3846C12.8581 20.5064 12.7837 20.617 12.69 20.71C12.597 20.8037 12.4864 20.8781 12.3646 20.9289C12.2427 20.9797 12.112 21.0058 11.98 21.0058C11.848 21.0058 11.7173 20.9797 11.5954 20.9289C11.4736 20.8781 11.363 20.8037 11.27 20.71L9.27 18.71C9.17627 18.617 9.10188 18.5064 9.05111 18.3846C9.00034 18.2627 8.9742 18.132 8.9742 18C8.9742 17.868 9.00034 17.7373 9.05111 17.6154C9.10188 17.4936 9.17627 17.383 9.27 17.29L11.27 15.29C11.3632 15.1968 11.4739 15.1228 11.5958 15.0723C11.7176 15.0219 11.8481 14.9959 11.98 14.9959C12.1119 14.9959 12.2424 15.0219 12.3642 15.0723C12.4861 15.1228 12.5968 15.1968 12.69 15.29C12.7832 15.3832 12.8572 15.4939 12.9077 15.6158C12.9581 15.7376 12.9841 15.8681 12.9841 16C12.9841 16.1319 12.9581 16.2624 12.9077 16.3842C12.8572 16.5061 12.7832 16.6168 12.69 16.71L11.41 18L12.69 19.29ZM19.27 16.71C19.0817 16.5217 18.9759 16.2663 18.9759 16C18.9759 15.7337 19.0817 15.4783 19.27 15.29C19.4583 15.1017 19.7137 14.9959 19.98 14.9959C20.2463 14.9959 20.5017 15.1017 20.69 15.29L22.69 17.29C22.7837 17.383 22.8581 17.4936 22.9089 17.6154C22.9597 17.7373 22.9858 17.868 22.9858 18C22.9858 18.132 22.9597 18.2627 22.9089 18.3846C22.8581 20.5064 22.7837 20.617 22.69 20.71C22.597 20.8037 22.4864 20.8781 22.3646 20.9289C22.2427 20.9797 22.112 21.0058 21.98 21.0058C21.848 21.0058 21.7173 20.9797 21.5954 20.9289C21.4736 20.8781 21.363 20.8037 21.27 20.71L19.27 18.71C19.1763 18.617 19.1019 18.5064 19.0511 18.3846C19.0003 18.2627 18.9742 18.132 18.9742 18C18.9742 17.868 19.0003 17.7373 19.0511 17.6154C19.1019 17.4936 19.1763 17.383 19.27 17.29L20.59 18L19.27 16.71ZM17.27 14.05C17.4039 14.081 17.53 14.1392 17.6404 14.2211C17.7509 14.303 17.8432 14.4068 17.9117 14.526C17.9802 14.6451 18.0234 14.7772 18.0386 14.9138C18.0538 15.0504 18.0406 15.1887 18 15.32L16 21.32C15.9304 21.527 15.795 21.7055 15.6144 21.8283C15.4339 21.9511 15.2181 22.0114 15 22C14.8916 21.9973 14.784 21.9805 14.68 21.95C14.5551 21.9083 14.4396 21.8422 14.3402 21.7557C14.2409 21.6692 14.1596 21.5639 14.1011 21.4459C14.0425 21.3279 14.0079 21.1995 13.9991 21.0681C13.9903 20.9366 14.0076 20.8047 14.05 20.68L16.05 14.68C16.0917 14.5551 16.1578 14.4396 16.2443 14.3402C16.3308 14.2409 16.4361 14.1596 16.5541 14.1011C16.6721 14.0425 16.8005 14.0079 16.9319 13.9991C17.0634 13.9903 17.1953 14.0076 17.32 14.05H17.27Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  // Card 2: Mobile Application
  {
    href: "https://firnas.tech/our-services/mobile-app-development/",
    title: "Mobile Application",
    description:
      "Our mobile applications are built to be easy and responsive, so they fit your particular company requirements and improve user interaction.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        className="text-white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.8386 11.32L18.9306 20.048C18.7559 20.5707 19.0386 21.1373 19.5626 21.312C20.0866 21.4867 20.6532 21.204 20.8279 20.68L23.7359 11.952C23.9106 11.4293 23.6279 10.8627 23.1039 10.688C22.5799 10.5133 22.0132 10.796 21.8386 11.32Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.3838 13.7987L26.5852 16L24.3838 18.2013C23.9932 18.592 23.9932 19.2253 24.3838 19.616C24.7745 20.0067 25.4078 20.0067 25.7985 19.616L28.7065 16.7067C29.0972 16.316 29.0972 15.684 28.7065 15.2933L25.7985 12.384C25.4078 11.9933 24.7745 11.9933 24.3838 12.384C23.9932 12.7747 23.9932 13.408 24.3838 13.7987Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.868 12.384L13.96 15.2933C13.5693 15.684 13.5693 16.316 13.96 16.7067L16.868 19.616C17.2587 20.0067 17.892 20.0067 18.2827 19.616C18.6733 19.2253 18.6733 18.592 18.2827 18.2013L16.0813 16L18.2827 13.7987C18.6733 13.408 18.6733 12.7747 18.2827 12.384C17.892 11.9933 17.2587 11.9933 16.868 12.384Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.3333 20.3787L22.092 21.1014C21.6853 22.3227 20.3627 22.984 19.1413 22.5774C18.4667 22.352 17.9627 21.8494 17.716 21.2374C17.0733 21.276 16.4173 21.0494 15.9253 20.5587L13.0173 17.6494C12.1053 16.7387 12.1053 15.2614 13.0173 14.3507L15.9253 11.4414C16.836 10.5307 18.3147 10.5307 19.2253 11.4414C19.636 11.852 19.8613 12.3774 19.9027 12.9147L20.5747 10.8987C20.8493 10.0747 21.5387 9.50669 22.3333 9.34802V5.33335C22.3333 4.36135 21.9467 3.42802 21.26 2.74002C20.572 2.05335 19.6387 1.66669 18.6667 1.66669C15.408 1.66669 9.92533 1.66669 6.66667 1.66669C5.69467 1.66669 4.76133 2.05335 4.07333 2.74002C3.38667 3.42802 3 4.36135 3 5.33335V26.6667C3 27.6387 3.38667 28.572 4.07333 29.26C4.76133 29.9467 5.69467 30.3333 6.66667 30.3333H18.6667C19.6387 30.3333 20.572 29.9467 21.26 29.26C21.9467 28.572 22.3333 27.6387 22.3333 26.6667V20.3787ZM10 27H15.3333C15.8853 27 16.3333 26.552 16.3333 26C16.3333 25.448 15.8853 25 15.3333 25H10C9.448 25 9 25.448 9 26C9 26.552 9.448 27 10 27ZM18 3.66669H7.33333L8.164 5.74269C8.468 6.50269 9.20267 7.00002 10.0213 7.00002H15.312C16.1307 7.00002 16.8653 6.50269 17.1693 5.74269L18 3.66669Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  // Card 3: Custom Development
  {
    href: "https://firnas.tech/our-services/custom-software-development/",
    title: "Custom Development",
    description:
      "We craft solutions tailored to your specific business needs, boosting efficiency and fostering innovation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 27.749 32.122"
        className="text-white"
      >
        <g transform="translate(0.004 -0.001)">
          <path
            d="M2333.385,633.067a1.079,1.079,0,0,0-1.07-1.089h-5.746V621.019h16.336v1.64a1.07,1.07,0,1,0,2.139,0v-8.41a1.079,1.079,0,0,0-1.069-1.089H2325.5a1.08,1.08,0,0,0-1.069,1.089v18.817a1.08,1.08,0,0,0,1.07,1.089h6.815a1.079,1.079,0,0,0,1.072-1.089Zm9.521-17.728v3.5h-16.336v-3.5Z"
            transform="translate(-2324.432 -613.16)"
            fill="currentColor"
          />
          <path
            d="M2334.6,624.377h.136a1.089,1.089,0,1,0,0-2.177h-.136a1.089,1.089,0,1,0,0,2.177Z"
            transform="translate(-2330.75 -619.388)"
            fill="currentColor"
          />
          <path
            d="M2343.6,624.377h.136a1.089,1.089,0,1,0,0-2.177h-.136a1.089,1.089,0,1,0,0,2.177Z"
            transform="translate(-2337 -619.388)"
            fill="currentColor"
          />
          <path
            d="M2352.6,624.377h.136a1.089,1.089,0,1,0,0-2.177h-.136a1.089,1.089,0,1,0,0,2.177Z"
            transform="translate(-2343.25 -619.388)"
            fill="currentColor"
          />
          <path
            d="M2376.821,676.109a3.1,3.1,0,1,0,3.047,3.1,3.1,3.1,0,0,0-3.047-3.1Zm0,5.109a2.006,2.006,0,1,1,1.973-2.006A2.007,2.007,0,0,1,2376.821,681.218Z"
            transform="translate(-2360.432 -658.299)"
            fill="currentColor"
          />
          <path
            d="M2368.122,653.835H2364.2a6.579,6.579,0,0,0-1.18-2.814l3.047-2.706a1.1,1.1,0,0,0,.1-1.536,1.055,1.055,0,0,0-1.509-.105l-3.186,2.83a6.335,6.335,0,0,0-2.55-1.039v-3.94a1.07,1.07,0,1,0-2.139,0v3.94a6.329,6.329,0,0,0-2.5,1l-2.374-2.4a1.055,1.055,0,0,0-1.512.005,1.1,1.1,0,0,0,.006,1.54l2.325,2.351a6.607,6.607,0,0,0-.321,7.447l-3.067,2.6a1.1,1.1,0,0,0-.136,1.534,1.055,1.055,0,0,0,1.506.142l3.124-2.643a6.355,6.355,0,0,0,2.95,1.345v3.653a1.07,1.07,0,1,0,2.139,0v-3.654a6.326,6.326,0,0,0,2.392-.939l2.594,2.231a1.056,1.056,0,0,0,1.507-.129,1.1,1.1,0,0,0-.127-1.535l-2.376-2.041a6.584,6.584,0,0,0,1.284-2.956h3.922a1.089,1.089,0,0,0,0-2.177Zm-10.265,5.47a4.381,4.381,0,1,1,4.3-4.38,4.381,4.381,0,0,1-4.3,4.38Z"
            transform="translate(-2341.468 -634.012)"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
  // Card 4: AI/ML/GenAI Development
  {
    href: "https://firnas.tech/our-services/ai-ml-genai-development/",
    title: "AI/ML/GenAI Development",
    description:
      "Using artificial intelligence and machine learning to develop creative, data-driven solutions that promote better decision-making and corporate expansion.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
      >
        <path d="M15.25 2c.38 0 .693.282.743.648L16 2.75l.001 2.325c1.469.298 2.626 1.456 2.924 2.925H21.25a.75.75 0 0 1 .102 1.493L21.25 9.5H19v1.75h2.25a.75.75 0 0 1 .102 1.493L21.25 12.75H19v1.75h2.25a.75.75 0 0 1 .102 1.493L21.25 16h-2.325c-.298 1.469-1.456 2.626-2.924 2.925L16 21.25a.75.75 0 0 1-1.493.102L14.5 21.25V19h-1.75v2.25a.75.75 0 0 1-1.493.102L11.25 21.25V19H9.5v2.25a.75.75 0 0 1-1.493.102L8 21.25v-2.325c-1.47-.298-2.627-1.456-2.925-2.925H2.75a.75.75 0 0 1-.102-1.493L2.75 14.5H5v-1.75H2.75a.75.75 0 0 1-.102-1.493L2.75 11.25H5V9.5H2.75a.75.75 0 0 1-.102-1.493L2.75 8h2.325c.299-1.469 1.456-2.627 2.925-2.925V2.75a.75.75 0 0 1 1.493-.102L9.5 2.75V5h1.75V2.75a.75.75 0 0 1 1.493-.102L12.75 2.75V5h1.75V2.75c0-.345.233-.636.55-.723L15.148 2.007 15.25 2Zm0 4.5H8.75A2.25 2.25 0 0 0 6.5 8.75v6.5A2.25 2.25 0 0 0 8.75 17.5h6.5a2.25 2.25 0 0 0 2.25-2.25v-6.5a2.25 2.25 0 0 0-2.25-2.25Zm-3.245 2.505a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      </svg>
    ),
  },
  // Card 5: UI/UX Design
  {
    href: "https://firnas.tech/our-services/ui-ux/",
    title: "UI/UX Design",
    description:
      "Creating captivating and simple user interfaces that improve user experiences and guarantee smooth interactions will help drive consumer happiness.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
  // Card 6: Digital Marketing
  {
    href: "https://firnas.tech/our-services/digital-marketing/",
    title: "Digital Marketing",
    description:
      "Creating data-driven plans to increase your online visibility, interact with your audience, and propel quantifiable company expansion across digital platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        className="text-white"
      >
        <path
          d="M2.8125 11.3116H0.9375C0.419312 11.3116 0 11.7309 0 12.2491C0 12.7673 0.419312 13.1866 0.9375 13.1866H2.8125C3.33069 13.1866 3.75 12.7673 3.75 12.2491C3.75 11.7309 3.33069 11.3116 2.8125 11.3116Z"
          fill="currentColor"
        />
        <path
          d="M3.26342 6.62407L1.93773 5.29844C1.57154 4.93226 0.978231 4.93226 0.612043 5.29844C0.245855 5.66463 0.245855 6.25794 0.612043 6.62413L1.93773 7.94976C2.30398 8.31601 2.89717 8.31601 3.26342 7.94976C3.62961 7.58357 3.62961 6.99026 3.26342 6.62407Z"
          fill="currentColor"
        />
        <path
          d="M3.26342 16.5485C2.89723 16.1823 2.30392 16.1822 1.93773 16.5485L0.612043 17.8742C0.245855 18.2403 0.245855 18.8337 0.612043 19.1998C0.978293 19.5661 1.57148 19.5661 1.93773 19.1998L3.26342 17.8742C3.62961 17.508 3.62961 16.9147 3.26342 16.5485Z"
          fill="currentColor"
        />
        <path
          d="M31.0625 11.3116H29.1875C28.6693 11.3116 28.25 11.7309 28.25 12.2491C28.25 12.7673 28.6693 13.1866 29.1875 13.1866H31.0625C31.5807 13.1866 32 12.7673 32 12.2491C32 11.7309 31.5807 11.3116 31.0625 11.3116Z"
          fill="currentColor"
        />
        <path
          d="M31.3884 5.29838C31.0222 4.9322 30.4289 4.9322 30.0627 5.29838L28.737 6.62407C28.3709 6.99026 28.3709 7.58357 28.737 7.94976C29.1033 8.31601 29.6965 8.31601 30.0627 7.94976L31.3884 6.62407C31.7546 6.25788 31.7546 5.66457 31.3884 5.29838Z"
          fill="currentColor"
        />
        <path
          d="M31.3884 17.8741L30.0627 16.5484C29.6965 16.1823 29.1032 16.1823 28.737 16.5484C28.3709 16.9146 28.3709 17.5079 28.737 17.8741L30.0627 19.1998C30.429 19.566 31.0222 19.566 31.3884 19.1998C31.7546 18.8336 31.7546 18.2403 31.3884 17.8741Z"
          fill="currentColor"
        />
        <path
          d="M23.0909 2.51495C20.4469 0.365325 16.978 -0.4623 13.5841 0.251763C9.35255 1.13526 5.90648 4.63283 5.0093 8.86258C4.24667 12.4615 5.1878 16.0742 7.59017 18.775C8.56142 19.868 9.15392 21.1871 9.34823 22.5616H12.2502V14.1241C12.2502 13.7611 14.9992 8.40451 15.1615 8.07983C15.4802 7.44445 16.5202 7.44445 16.8388 8.07983C17.0089 8.41995 19.7502 13.7793 19.7502 14.1241V22.5616H22.6554C22.8563 21.1936 23.4662 19.8535 24.4651 18.7137C26.2614 16.6656 27.2502 14.0362 27.2502 11.3116C27.2502 7.90858 25.734 4.66276 23.0909 2.51495Z"
          fill="currentColor"
        />
        <path
          d="M16 15.9167C15.3661 15.9167 14.7347 15.8062 14.125 15.6046V22.5616H17.875V15.6046C17.2652 15.8062 16.6339 15.9167 16 15.9167Z"
          fill="currentColor"
        />
        <path
          d="M9.4375 24.4366V25.3741C9.4375 26.925 10.6991 28.1866 12.25 28.1866H19.75C21.3009 28.1866 22.5625 26.925 22.5625 25.3741V24.4366H9.4375Z"
          fill="currentColor"
        />
        <path
          d="M16 10.5956L14.4507 13.6943C15.4519 14.1045 16.5481 14.1045 17.5493 13.6943L16 10.5956Z"
          fill="currentColor"
        />
        <path
          d="M11.4854 30.0616C11.8737 31.1505 12.9045 31.9991 14.1252 31.9991H17.8752C19.0958 31.9991 20.1267 31.1505 20.515 30.0616H11.4854Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  // Card 7: Branding
  {
    href: "https://firnas.tech/our-services/branding/",
    title: "Branding",
    description:
      "Creating a powerful and distinctive brand identity that resonates with your audience, builds trust, and drives long-term loyalty.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="34"
        height="34"
        viewBox="0 0 1024 1024"
        className="text-white"
      >
        <path d="M348.942 1023.996C278.174 1023.996 220.806 966.747 220.806 895.86V729.176c0-29.351 14.617-57.172 38.042-73.805 27.262-19.345 61.916-22.072 91.564-7.303 68.325 33.729 119.294 37.057 151.039 37.057 32.222 0 45.485-3.328 47.933-4.309 6.848-2.693 25.133-14.862 31.991-38.042 7.744-26.177.49-55.826-17.794-73.069-42.607-40.404-106.829-101.442-106.829-204.341 0-101.442 82.915-184.347 184.357-184.347s184.357 82.905 184.357 184.347c0 86.829-43.085 142.247-81.215 178.609-17.058 16.323-24.887 40.169-20.983 63.665 3.904 23.497 19.345 43.34 41.251 52.844 26.663 11.566 73.069 22.072 138.254 22.072 65.674 0 148.627-10.741 247.669-34.805 27.262 53.248 38.042 26.928 70.984 70.072 63.234 76.664-9.545 8.132-27.065-40.858-100.188-68.129-41.662-15.529-51.472-8.309-101.012 15.107-.334.128-.628.216-.893.353-14.617 8.809-29.351 17.314-44.419 25.152-80.225 41.898-146.637 103.405-172.731 150.306l-.049-.039c-87.867 147.981-48.166 308.823 27.968 401.379 7.299 8.848 18.197 18.904 24.338 24.946 9.427-10.644 20.944-29.184 14.793-51.09-10.251-36.62-6.936-71.523 12.694-94.066-20.924-63.921.726-137.475 49.353-179.569 25.133-16.167 50.942-27.105 85.041-27.595 78.577-1.118 134.581 30.666 203.456 59.212 69.767 28.91 143.959 43.006 219.514 40.573 98.423-3.155 186.818-30.491 255.336-81.58V895.863c0 70.768-57.249 128.136-128.136 128.136H128.138C57.251 1023.999.002 966.75.002 895.863V128.137C.002 57.369 57.251.001 128.138.001h767.728c70.768 0 128.136 57.249 128.136 128.136v767.728c0 70.768-57.249 128.136-128.136 128.136H348.944z" />
      </svg>
    ),
  },
  // Card 8: Staff Augmentation
  {
    href: "https://firnas.tech/our-services/staff-augmentation/",
    title: "Staff Augmentation",
    description:
      "We provide skilled professionals to seamlessly integrate with your team, scale your workforce, and enhance project delivery with expertise on demand.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <path
          d="M1.5 6.5C1.5 3.46243 3.96243 1 7 1C10.0376 1 12.5 3.46243 12.5 6.5C12.5 9.53757 10.0376 12 7 12C3.96243 12 1.5 9.53757 1.5 6.5Z"
          fill="currentColor"
        />
        <path
          d="M14.4999 6.5C14.4999 8.00034 14.0593 9.39779 13.3005 10.57C14.2774 11.4585 15.5754 12 16.9999 12C20.0375 12 22.4999 9.53757 22.4999 6.5C22.4999 3.46243 20.0375 1 16.9999 1C15.5754 1 14.2774 1.54153 13.3005 2.42996C14.0593 3.60221 14.4999 4.99966 14.4999 6.5Z"
          fill="currentColor"
        />
        <path
          d="M0 18C0 15.7909 1.79086 14 4 14H10C12.2091 14 14 15.7909 14 18V22C14 22.5523 13.5523 23 13 23H1C0.447716 23 0 22.5523 0 22V18Z"
          fill="currentColor"
        />
        <path
          d="M16 18V23H23C23.5522 23 24 22.5523 24 22V18C24 15.7909 22.2091 14 20 14H14.4722C15.4222 15.0615 16 16.4633 16 18Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full text-white py-24 sm:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/Services-bg-section.jpg')`,
        backgroundColor: "#050b08",
      }}
    >
      {/* Subtle Grid Overlay for tech texture matching screenshot */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Emerald Green Glow highlight */}
      <div className="absolute top-0 right-[15%] w-[550px] h-[350px] bg-[radial-gradient(ellipse,rgba(0,189,95,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Bottom Emerald Green Glow highlight */}
      <div className="absolute -bottom-20 -left-10 w-[500px] h-[350px] bg-[radial-gradient(ellipse,rgba(0,189,95,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            {/* Tag/Badge: • Our Services */}
            <div className="inline-flex items-center gap-2 mb-4 select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00BD5F] inline-block shadow-[0_0_8px_rgba(0,189,95,0.7)]" />
              <span className="text-[16px] font-medium text-white/90">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.02em] leading-[1.12] mb-6">
              What We&apos;re Offering
            </h2>

            {/* Paragraph Description */}
            <p className="text-[16px] sm:text-[17px] text-white/75 font-light leading-[1.65]">
              Firnas.tech is dedicated to enabling companies by means of creative
              IT solutions. Focusing on agility and accuracy, we drive digital
              transformation, thus allowing businesses to realize their full
              potential in a fast changing environment.
            </p>
          </div>

          {/* View all Services Link with Arrow */}
          <div className="shrink-0 pb-1">
            <Link
              href="https://firnas.tech/our-services/"
              className="group inline-flex items-center gap-2 text-[16px] font-medium text-white hover:text-[#00BD5F] transition-colors duration-200"
            >
              <span>View all Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 8 Service Cards Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative flex flex-col items-start p-7 sm:p-8 rounded-[16px] border border-white/[0.12] bg-black/25 backdrop-blur-[4px] transition-all duration-300 hover:border-[#00BD5F] hover:bg-black/35 hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.3)] min-h-[290px]"
            >
              {/* Icon Container */}
              <div className="mb-6 text-white group-hover:text-[#00BD5F] transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[21px] font-semibold text-white mb-3 group-hover:text-[#00BD5F] transition-colors duration-300 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-white/65 leading-[1.6] font-normal">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
