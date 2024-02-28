import {
  Avatar,
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";

import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToaccommodations } from "../../state/reducers/accommodationsReducer/accommodationsReducer";
import { IAccommodation } from "../../interfaces/accommodation.interface";
import moment from "moment";

interface FormDrawerProps {
  mode: string;
  showDrawer: () => void;
  onClose: () => void;
  formOpen: boolean;
  formData: IAccommodation;
}

const FormDrawer = ({
  mode,
  //   showDrawer,
  onClose,
  formOpen,
  formData,
}: FormDrawerProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(formData, "selected accommodation");
    if (formData !== undefined) {
      form.setFieldsValue({
        ...formData,
        startDate: moment(formData.startDate),
        endDate: moment(formData.endDate),
      });
    }
  }, [formData]);

  const getTitle = (mode: string) => {
    if (mode === "view") {
      return (
        <span className="font-semibold text-[18px]">Accommodation Details</span>
      );
    } else if (mode === "create") {
      return (
        <span className="font-semibold text-[18px]">Post Accommodation</span>
      );
    }
  };

  return (
    <Drawer
      title={
        <div className="flex justify-between items-center">
          {getTitle(mode)}{" "}
          {formData?.postedBy === null && (
            <span className="ml-2 text-[#0055A2] cursor-pointer font-semibold">
              Own the post
            </span>
          )}
        </div>
      }
      placement="right"
      onClose={() => {
        form.resetFields();
        onClose();
      }}
      open={formOpen}
      width={500}
    >
      <Form name="basic" layout="vertical" form={form}>
        <Form.Item
          label="Community Name"
          name="communityName"
          rules={[
            { required: true, message: "Please input your community name!" },
          ]}
        >
          <Input placeholder="Enter community name" />
        </Form.Item>
        <Form.Item
          label="Amenities"
          name="amenities"
          rules={[
            { required: true, message: "Please input community amenities" },
          ]}
        >
          <Select
            options={[
              { value: "pool", label: "Swimming pool" },
              { value: "jacuzzi", label: "Jacuzzi" },
              { value: "gym", label: "Gym" },
              { value: "lobby", label: "Lobby" },
            ]}
            mode="multiple"
            placeholder="Select accommodation type"
            allowClear
          />
        </Form.Item>
        <div className="flex items-center">
          <div className="w-full">
            <Form.Item
              label="Accomodation type"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please input your accommodation type!",
                },
              ]}
              style={{ width: "100%" }}
            >
              <Select
                options={[
                  { value: "temporary", label: "Temporary" },
                  { value: "permanant", label: "Permanant" },
                ]}
                placeholder="Select accommodation type"
                allowClear
              />
            </Form.Item>
          </div>
          <div className="w-full ml-2">
            <Form.Item
              label="Rent"
              name="rent"
              rules={[
                {
                  required: true,
                  message: "Please input your rent!",
                },
              ]}
              className="w-full"
            >
              <InputNumber
                placeholder="Enter rent"
                className="w-full"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <Form.Item
              label="Area (sqft)"
              name="area"
              rules={[
                {
                  required: true,
                  message: "Please input area of the house!",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter area of the house"
                className="w-full"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
          <div className="w-full ml-2">
            <Form.Item
              label="Distance from SJSU (m)"
              name="distanceFromUniversity"
              rules={[
                {
                  required: true,
                  message: "Please input distance from SJSU!",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter the distance"
                className="w-full"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <Form.Item
              label="Number of Bed"
              name="numberOfBed"
              rules={[
                {
                  required: true,
                  message: "Please input no. of bed",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter no.of bed"
                className="w-full"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
          <div className="w-full ml-2">
            <Form.Item
              label="Number of Bath"
              name="numberOfBath"
              rules={[
                {
                  required: true,
                  message: "Please input no. of bath",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter no.of bath"
                className="w-full"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please input gender",
                },
              ]}
            >
              <Select
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Prefer not to say" },
                ]}
                placeholder="Select gender"
                allowClear
              />
            </Form.Item>
          </div>
          <div className="w-full ml-2">
            <Form.Item
              label="Number of spots available"
              name="spotsAvailable"
              rules={[
                {
                  required: true,
                  message: "Please input no. of spots available",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter no.of spots available"
                className="w-full"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <Form.Item
              label="Start date"
              name="startDate"
              rules={[
                {
                  required: true,
                  message: "Please input start date",
                },
              ]}
            >
              <DatePicker
                placeholder="Enter start date"
                className="w-full"
                onClick={(e) => console.log(e)}
              />
            </Form.Item>
          </div>
          <div className="w-full ml-2">
            <Form.Item
              label="End date"
              name="endDate"
              rules={[
                {
                  required: true,
                  message: "Please input end date",
                },
              ]}
            >
              <DatePicker placeholder="Enter end date" className="w-full" />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <Form.Item
              label="Smoking"
              name="smokingAllowed"
              rules={[
                {
                  required: true,
                  message: "Please input smoking allowed or not",
                },
              ]}
            >
              <Select
                options={[
                  { value: true, label: "Allowed" },
                  { value: false, label: "Not allowed" },
                ]}
                placeholder="Select preference"
                allowClear
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
          <div className="w-full ml-2">
            <Form.Item
              label="Alcohol consumption"
              name="alcoholAllowed"
              rules={[
                {
                  required: true,
                  message: "Please input alcohol consumption allowed or not",
                },
              ]}
            >
              <Select
                options={[
                  { value: true, label: "Allowed" },
                  { value: false, label: "Not allowed" },
                ]}
                placeholder="Select preference"
                allowClear
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <TextArea placeholder="Enter address" />
        </Form.Item>

        {mode === "view" ? (
          formData?.postedBy && (
            <>
              <div className="mb-2 font-semibold text-[#0055A2]">Contact</div>
              <div className="w-full rounded-md p-3 flex border-[1px] border-[#e0e0e0] border-solid shadow-md">
                <div className="flex items-center mr-4">
                  <Avatar
                    style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                    size={40}
                  >
                    {formData?.postedBy?.name[0]}
                  </Avatar>
                </div>
                <div>
                  <div className="font-semibold">
                    {formData?.postedBy?.name}
                  </div>
                  <div className="">{formData?.postedBy?.email}</div>
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <Form.Item
              label="Contact email"
              name={["postedBy", "email"]}
              rules={[
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
            >
              <Input placeholder="Enter contact email" />
            </Form.Item>
          </>
        )}

        {mode !== "view" && (
          <div className="w-full">
            <Button
              type="primary"
              className="w-full"
              onClick={() => {
                dispatch(addToaccommodations(form.getFieldsValue()));
                onClose();
                console.log(form.getFieldsValue());
              }}
            >
              Submit
            </Button>
          </div>
        )}
      </Form>
    </Drawer>
  );
};

export default FormDrawer;
