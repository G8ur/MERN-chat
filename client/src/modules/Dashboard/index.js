import React from "react";
import Input from "../../components/Input";
import Avatar from "../../assets/avatar.svg";

const Dashboard = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Mary",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Alexander",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Adam",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Johny",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Lana",
      status: "Available",
      img: Avatar,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-secondary">
        <div className="flex items-center my-8 mx-14">
          <div className="border border-primary p-2 rounded-full">
            <img src={Avatar} width={75} height={75} />
          </div>
          <div className="ml-8">
            <h3 className="text-2xl">Tutorials </h3>
            <p className="text-lg font-light">My account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messag</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex  items-center py-8 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img src={img} width={60} height={75} />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">{name} </h3>
                      <p className="text-sm font-light text-gray-600">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary  my-14 rounded-full flex items-center px-14 ">
          <div className="cursor-pointer">
            <img src={Avatar} width={60} height={60} />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg ">Alexander</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] h-screen w-full overflow-scroll shadow-sm">
            <div className="p-14">
                <div className=" max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">Kya likhud pdlo
                </div>
                <div className=" max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
                    Lorem ijsncjCjsbcjdsbchsbcs
                </div>
                <div className=" max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">Kya likhud pdlo
                </div>
                <div className=" max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
                    Lorem ijsncjCjsbcjdsbchsbcs
                </div>
                <div className=" max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">Kya likhud pdlo
                </div>
                <div className=" max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
                    Lorem ijsncjCjsbcjdsbchsbcs
                </div>
                <div className=" max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">Kya likhud pdlo
                </div>
                <div className=" max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
                    Lorem ijsncjCjsbcjdsbchsbcs
                </div>
            </div>
        </div>
            <div className="p-14 w-full flex items-center">
            <Input placeholder="type a mesage" className="w-[75%]" inputClassName="p-4 border-0 shadow-lg rounded-full bg-secondary focus:ring-0 focus:border-0 outline-none"/>
            <div className="ml-8 p-2 cursor-pointer bg-light rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
        </div>
        <div className="ml-8 p-2 cursor-pointer bg-light rounded-full ">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M12 11l0 6" />
        <path d="M9 14l6 0" />
        </svg>
        </div>
        </div>
      </div>
    

      <div className="w-[25%] h-screen bg-light"></div>
    </div>
  );
};

export default Dashboard;
