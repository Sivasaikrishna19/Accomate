import { Checkbox, DatePicker, InputNumber, Radio, Select } from "antd";
import React from "react";

const Filters = () => {
  const bedRoomOptions = [
    { label: "1 B", value: 1 },
    { label: "2 B", value: 2 },
    { label: "3 B", value: 3 },
  ];
  const amenitiesOptions = [
    { label: "Gym", value: "gym" },
    { label: "Swimming Pool", value: "pool" },
    { label: "Lobby", value: "lobby" },
    { label: "Jacuzzi", value: "jacuzzi" },
  ];
  const { RangePicker } = DatePicker;
  return (
    <div className="p-2 pr-3">
      <div>
        <div className="text-[22px] font-extrabold mb-2 text-[#0055A2]">
          Sort by
        </div>
        <div>
          <Select
            placeholder="Select"
            className="w-full"
            options={[
              { value: "recent", label: "Most Recent" },
              { value: "rent", label: "Rent" },
              { value: "locality", label: "Locality" },
              { value: "Area", label: "Area" },
            ]}
            allowClear
          />
        </div>
        <div className="mt-4">
          <div className="text-[22px] font-extrabold mb-3 text-[#0055A2]">
            Narrow your selection
          </div>
          <div className="mb-3">
            <div className="font-semibold text-[16px]">Accommodation type</div>
            <div className="mt-2 ">
              {" "}
              <Select
                placeholder="Select"
                className="w-full"
                options={[
                  { value: "temporary", label: "Temporary" },
                  { value: "permanent", label: "Permanent" },
                ]}
                allowClear
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-[16px]">Move-in range</div>
            <div className="mt-2 ">
              {" "}
              <RangePicker className="w-full" />
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-[16px]">Rent range ($)</div>
            <div className="mt-2 flex items-center">
              {" "}
              <div className="mr-2 flex items-center">
                <span className="mr-2">Min</span>
                <InputNumber
                  defaultValue={300}
                  className="w-full"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex items-center">
                <span className="mr-2">Max</span>
                <InputNumber
                  defaultValue={2500}
                  className="w-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="mb-3 w-full flex items-center">
            <div className="w-full">
              <div className="font-semibold text-[16px]">Gender</div>
              <div className="mt-2 w-full">
                {" "}
                <Select
                  placeholder="Select"
                  className="w-full"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                  allowClear
                />
              </div>
            </div>
            <div className="ml-2 w-full">
              <div className="font-semibold text-[16px]">Available spots</div>
              <div className="mt-2 w-full">
                {" "}
                <InputNumber
                  min={1}
                  max={6}
                  defaultValue={1}
                  // onChange={onChange}
                  className="w-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          {/* <div className="mb-3">
            <div className="font-semibold text-[16px]">Bedrooms</div>
            <div className="mt-2 ">
              {" "}
              <Checkbox.Group options={bedRoomOptions} />
            </div>
          </div> */}
          {/* <div className="mb-3">
            <div className="font-semibold text-[16px]">Amenities</div>
            <div className="mt-2 ">
              {" "}
              <Checkbox.Group options={amenitiesOptions} />
            </div>
          </div> */}
          <div className="mb-3 ">
            <div className="font-semibold text-[16px]">Preferences</div>
            <div className="flex w-full items-center justify-between mt-2">
              <Select
                options={[
                  { value: "smoking_friendly", label: "Smoking friendly" },
                  { value: "alcohol_friendly", label: "Alcohol friendly" },
                  { value: "nonveg_friendly", label: "Non veg friendly" },
                ]}
                mode="multiple"
                placeholder="Select preferences"
                allowClear
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
