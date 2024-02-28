import { Badge, Button } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { IAccommodation } from "../../interfaces/accommodation.interface";
import dayjs from "dayjs";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import FormDrawer from "./FormDrawer";
import { useAppSelector } from "../../state/hooks";
import { useDispatch } from "react-redux";
import { setAccommodations } from "../../state/reducers/accommodationsReducer/accommodationsReducer";

const List = () => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPosting, setSelectedPosting] = useState<IAccommodation>();
  const [mode, setMode] = useState<string>("");
  const accommodations = useAppSelector((state: any) => state.accommodations);
  const [tempAccommodations, setTempAccommodations] =
    useState<Array<IAccommodation>>();

  useEffect(() => {
    setTempAccommodations(accommodations.accommodations);
  }, [accommodations]);

  const showDrawer = () => {
    setFormOpen(true);
  };

  const onClose = () => {
    setSelectedPosting({} as IAccommodation);
    setFormOpen(false);
  };

  const getTypeText = (type: string) => {
    if (type === "temporary") return "Temporary";
    else return "Permanent";
  };
  const getTypeColor = (type: string) => {
    if (type === "temporary") return "#87CEEB";
    else return "#FF6F61";
  };

  const getAllPostings = () => {
    axios
      .get(
        "https://f5923f09-d816-40b0-b0a1-e49193f4b923.mock.pstmn.io/postings"
      )
      .then((res) => {
        dispatch(setAccommodations(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllPostings();
  }, []);

  const getFilteredPostings = (
    data: Array<IAccommodation>,
    searchString: string
  ) => {
    const regex = new RegExp(searchString, "i");
    console.log(searchString);
    console.log(
      data.filter((accommodation) => regex.test(accommodation.communityName))
    );
    setTempAccommodations(
      data.filter((accommodation) => regex.test(accommodation.communityName))
    );
  };

  return (
    <div className="p-2 px-4">
      <div className="flex items-center">
        <Search
          placeholder="Search for accommodation"
          enterButton
          onChange={(e) => {
            getFilteredPostings(accommodations.accommodations!, e.target.value);
          }}
        />{" "}
        <Button
          type="primary"
          className="ml-2"
          onClick={() => {
            showDrawer();
            setMode("create");
          }}
        >
          Add
        </Button>
      </div>

      <div className="mt-6">
        {tempAccommodations?.map((item: IAccommodation) => {
          return (
            <Badge.Ribbon
              text={getTypeText(item.type)}
              color={getTypeColor(item.type)}
            >
              <div
                className="px-4 border-[1px] border-[1px] border-l-[4px] border-l-[#0055A2] border-[#e0e0e0] border-solid rounded-md p-2 my-3 text-[16px] hover:shadow-md hover:shadow-[#8FBDDF] cursor-pointer transition-shadow duration-500 "
                onClick={() => {
                  setMode("view");
                  setSelectedPosting(item);
                  showDrawer();
                }}
              >
                <div className="text-[20px] font-semibold ">
                  {item.communityName}
                </div>
                <div>
                  <div className="w-full flex items-center mt-4 justify-between ">
                    <div className="w-full">
                      <span className="mr-1 font-semibold">Rent</span>
                      <div className="mt-2">{item.rent} $</div>
                    </div>
                    <div className="w-full">
                      {" "}
                      <span className="mr-1 font-semibold">Area</span>
                      <div className="mt-2">{item.area} sqft</div>
                    </div>
                    <div className="w-full">
                      {" "}
                      <span className="mr-1 font-semibold">
                        No.of Spots Available
                      </span>
                      <div className="mt-2">{item.spotsAvailable}</div>
                    </div>
                  </div>
                  <div className="w-full flex items-center mt-3 justify-between ">
                    <div className="w-full">
                      <span className="mr-1 font-semibold">
                        Effective Period
                      </span>
                      <div className="mt-2">
                        {dayjs(item.startDate).format("D MMM")} -{" "}
                        {dayjs(item.endDate).format("D MMM")}
                      </div>
                    </div>
                    <div className="w-full">
                      {" "}
                      <span className="mr-1 font-semibold">Gender</span>
                      <div className="mt-2">
                        {item.gender === "male" ? (
                          <Badge color="blue" text="Male" />
                        ) : (
                          <Badge color="pink" text="Female" />
                        )}
                      </div>
                    </div>
                    <div className="w-full">
                      {" "}
                      <span className="mr-1 font-semibold">Room</span>
                      <div className="mt-2">
                        {item.numberOfBed} Bed {item.numberOfBath} Bath
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full  py-2 mt-2 justify-between">
                  <div className="text-[gray]">
                    {item.distanceFromUniversity} miles from SJSU
                  </div>
                  <div className="text-blue-400 cursor-pointer flex items-center">
                    <EyeOutlined />
                    <span className="ml-1">View</span>
                  </div>
                </div>
              </div>
            </Badge.Ribbon>
          );
        })}
      </div>
      <FormDrawer
        mode={mode}
        showDrawer={showDrawer}
        formOpen={formOpen}
        onClose={onClose}
        formData={selectedPosting!}
      />
    </div>
  );
};

export default List;
