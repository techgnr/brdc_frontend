const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <h1 className={`text-3xl font-bold inline-block border-half`}>{title}</h1>
    </div>
  );
};

export default Heading;
