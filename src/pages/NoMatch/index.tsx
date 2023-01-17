import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

function NoMatch() {
  const navigate = useNavigate();

  return (
    <div title={"Страница не найдена"} className="p-24 pt-60 pb-80">
      <div className="mb-36 flex justify-center">
        <DoNotDisturbIcon className="!h-[232px] !w-[318px] text-red-700" />
      </div>

      <p className="mb-40 text-center text-lg">
        К сожалению, не смогли найти запрашиваемую вами страницу
      </p>
      <div className="flex justify-center">
        <Button name="Назад" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
}

export default NoMatch;
