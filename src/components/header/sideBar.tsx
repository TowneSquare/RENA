import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../state/hooks";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../state/dialog";
import JoinUs from "./joinus";
import ConnectButton from "../connectButton";

const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isOpen = useAppSelector((state) => state.dialogState.bSidebar);
    return (
        <div className={`${isOpen ? "block" : "hidden"} fixed inset-0 w-full bg-primary z-[100] flex flex-col px-5 pt-10 pb-12`}>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                    <div className="flex items-center" style={{ zIndex: 100 }}>
                        <img onClick={() => navigate('/')}
                            src="/logo-white.svg"
                            className="h-[106px] md:h-[118px] cursor-pointer w-[182px] md:w-[205px]"
                        />
                    </div>
                    <Icon onClick={() => { dispatch(toggleSidebar(false)) }} icon={'fluent-mdl2:cancel'} className="text-[32px] cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <div />
                <div className="flex flex-col gap-8 flex-shrink-0">
                    <p className="text-[26px] font-semibold text-center leading-[30px]" >Claim or Liquify NFT</p>
                    <p className="text-[26px] font-semibold text-center leading-[30px]" >My Renegades</p>
                </div>
                <div className="flex flex-col w-full items-center flex-shrink-0">
                    <button className="w-[176px] mb-6 h-12 bg-[#FFF] text-[#121221] font-bold text-[18px] rounded-[4px]">Get $RENA</button>
                    <ConnectButton />
                    <div className="mt-14">
                        <JoinUs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
