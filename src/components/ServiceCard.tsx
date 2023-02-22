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
    <div className="flex items-center p-4 space-x-4">
      <p className="font-bold">{title}</p>
      <p >{about}</p>
    </div>
  );
};

export default ServiceCard;
