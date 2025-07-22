import { Helmet } from "react-helmet-async";

const ReactHelmet = ({
  title = "Baijnath Research and Development Center Pvt. Ltd.",
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Helmet>
      <title>{title}- Baijnath Research and Development Center Pvt. Ltd.</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default ReactHelmet;
