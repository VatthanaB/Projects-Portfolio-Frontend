interface SvgProps {
  color: string;
}

const Svg = (props: SvgProps) => {
  return (
    <svg
      className="max-w-screen relative bottom-0 text-slate-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 200"
    >
      <path
        fill={props.color}
        fill-opacity="1"
        d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,176C672,160,768,128,864,106.7C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default Svg;
