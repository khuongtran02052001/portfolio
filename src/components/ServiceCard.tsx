import React from "react";
import { IService } from "../type";

interface IServiceCardProps {
  services: IService
}

interface ComponentServiceCard extends React.FC<IServiceCardProps> { }

const ServiceCard: ComponentServiceCard = ({
  services: { Icon, about, title },
}) => {

  return (
    <div className="flex items-center p-4 space-x-4">
      {/* <Icon className="w-12 h-12 text-green" /> */}
      <div>
        <h5 className="font-bold">{title}</h5>
        <p >{about}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
