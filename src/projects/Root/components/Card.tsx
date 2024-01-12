import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface CardProps {
  image: string;
  route: string;
  appName: string;
  description: string;
  modalDescription: JSX.Element;
  githubLink: string;
  cardCarrousel?: boolean;

  icons: IconType[];
}
function Card(props: CardProps) {
  let cardClass = "card md:w-4/5 lg:w-1/4 glass ";
  let imageClass = "lg:w-full  lg:h-64 object-cover";
  let iconsClass = "w-6 h-6 mx-1 inline-flex text-slate-200";
  let appNameClass = "card-title text-xl text-customDarkOrange";
  let descriptionClass = "text-slate-100";
  let cardBodyClass = "card-body text-slate-100  ";
  let btnClass = "btn";

  if (props.cardCarrousel) {
    cardClass = "card md:w-4/5 lg:w-2/4 glass   ";
    imageClass = "lg:w-full  lg:h-80 object-cover";
    iconsClass = " h-6 lg:w-9 w-6 lg:h-9 mx-1 inline-flex ";
    appNameClass =
      "card-title text-customBlue font-semi-bold text-2xl lg:text-4xl";
    descriptionClass = "text-slate-100 text-lg lg:text-2xl";
    cardBodyClass = "card-body text-slate-100 space-y-3  ";
    btnClass = "btn btn-lg";
  }

  return (
    <div className={cardClass}>
      <figure>
        <img src={props.image} alt="car!" className={imageClass} />
      </figure>
      <div className={cardBodyClass}>
        <h2 className={appNameClass}>{props.appName}</h2>
        <p className={descriptionClass}>{props.description}</p>
        <p className="mb-3  font-normal text-customBlue dark:text-gray-400">
          {props.icons.map((Icon) => (
            <Icon className={iconsClass} />
          ))}
        </p>

        <div className="card-actions justify-end">
          <button
            className={btnClass}
            onClick={() => {
              const modal = document.getElementById(props.appName);
              if (modal instanceof HTMLDialogElement) {
                modal.showModal();
              }
            }}
          >
            More info
          </button>
          <Link to={props.route} className={btnClass}>
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
          </Link>
          {/* MODAL */}
          <dialog id={props.appName} className="modal">
            <div className="modal-box">
              <p className="py-4 text-customBlue">{props.modalDescription}</p>

              <div className="modal-action">
                <form method="dialog" className="space-x-2">
                  {/* if there is a button in form, it will close the modal */}
                  <Link to={props.route} className="btn">
                    Go to app
                  </Link>

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
