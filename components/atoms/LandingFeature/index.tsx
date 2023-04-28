type Props = {
  icon: any;
  title: any;
  description: any;
};

function LandingFeature(props: Props) {
  const { icon, title, description } = props;
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1">
        {/* <Icon className="text-white" name={icon} /> */}
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>{" "}
        <p className="max-w-2xl py-4 text-md leading-normal text-gray-500  dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default LandingFeature;
