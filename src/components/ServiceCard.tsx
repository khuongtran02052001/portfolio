import React from "react";
import { IService } from "../type";

interface IServiceCardProps {
  services: IService
}

interface ComponentServiceCard extends React.FC<IServiceCardProps> { }

const ServiceCard: ComponentServiceCard = ({
  services: { about, title },
}) => {

  return (
    <div className="flex items-center p-8">
      <div>
        <p className="font-bold text-xl">{title}</p>
        <p className="text-sm">{about}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
