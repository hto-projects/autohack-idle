import { IUpgrade, UpgradeStatus } from "../../../shared/types";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
}

const Upgrade = ({ up, status }: IUpgradeProps) => {
  return (
    <div className={`upgrade ${status}`}>
      {up.name} {status}
    </div>
  );
};

export default Upgrade;
