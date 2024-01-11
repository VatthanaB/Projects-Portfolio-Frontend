import { IconType } from "react-icons";

interface CardProps {
  image: string;
  route: string;
  appName: string;
  description: string;
  modalDescription: JSX.Element;
  githubLink: string;

  icons: IconType[];
}
function Card(props: CardProps) {
  return (
    <div className="card md:w-4/5 lg:w-1/4 glass ">
      <figure>
        <img
          src={props.image}
          alt="car!"
          className="lg:w-full  lg:h-64 object-cover"
        />
      </figure>
      <div className="card-body text-slate-100">
        <h2 className="card-title text-customBlue">{props.appName}</h2>
        <p>{props.description}</p>
        <p className="mb-3  font-normal text-customBlue dark:text-gray-400">
          {props.icons.map((Icon) => (
            <Icon className="w-6 h-6 mx-1 inline-flex " />
          ))}
        </p>

        <div className="card-actions justify-end">
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById(props.appName);
              if (modal instanceof HTMLDialogElement) {
                modal.showModal();
              }
            }}
          >
            More info
          </button>
          <a
            href={props.route}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Project
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          {/* MODAL */}
          <dialog id={props.appName} className="modal">
            <div className="modal-box">
              <p className="py-4 text-customBlue">{props.modalDescription}</p>

              <div className="modal-action">
                <form method="dialog" className="space-x-2">
                  {/* if there is a button in form, it will close the modal */}
                  <a
                    href={props.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Go to app
                  </a>

                  <a
                    href={props.githubLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repository
                  </a>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Card;
