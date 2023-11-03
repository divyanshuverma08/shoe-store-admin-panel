"use client";

import React, { useEffect, useState } from "react";
import styles from "../[slug]/product.module.css";
import TopBar from "@/components/topBar/topBar";
import Image from "next/image";
import Input from "@/components/input/input";
import { category } from "@/lib/services/category";
import toast from "react-hot-toast";
import { products } from "@/lib/services/products";
import { useRouter } from "next/navigation";
import { environment } from "@/lib/environment";

export default function NewProduct() {
  const router = useRouter();

  const [categories, setCategories] = useState(null);

  const [value, setValue] = useState({
    model: "",
    category: "default",
    color: "default",
    price: "",
    gender: "default",
    newRealease: true,
  });

  const [stock, setStock] = useState(0);

  const [sizes, setSizes] = useState([]);

  const [files, setFiles] = useState([]);

  const addSize = () => {
    let list = [...sizes];
    list.push({ size: "default", quantity: "" });
    setSizes(list);
  };
  const removeSize = () => {
    if (sizes.length > 0) {
      let list = [...sizes];
      list.pop();
      setSizes(list);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const uploadImages = async (file) => {
    if (!file) {
      return null;
    }
    try {
      const data = new FormData();
      data.append("file", file);
      data.append(
        "upload_preset",
        `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
      );
      data.append("folder", "kicks");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "post",
          body: data,
        }
      );

      const image = await res.json();
      return image.url;
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      const response = await category.getAllCategories({ auth: true });
      setCategories(response.data);
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e) => {
    if(files.length >= 4){
      toast.error("Only 4 photos are allowed")
      return;
    }
    let list = [...files];
    list.push(e.target.files[0]);
    setFiles(list);
  };

  const handleSubmit = async () => {
    if(!environment.ALOW_CHANGE){
      toast.error("Only owner of site has authorization to add product");
      return;
    }

    const { model, category, color, gender, newRealease, price } = value;

    if (!model || !price) {
      toast.error("Product name and Price are mandatory");
      return;
    }

    if (category === "default" || color === "default" || gender === "default") {
      toast.error("Please fill all the fields");
      return;
    }

    if (sizes.length < 1) {
      toast.error("At least one size is required");
      return;
    }


    if (files.length < 1) {
      toast.error("At least one image is madatory");
      return;
    }

    const toastId = toast.loading("Loading...", { position: "top-right" });

    let images = [];

    for(var i = 0; i  < files.length; i++){
      const imageUrl = await uploadImages(files[i]);
      images.push({imageUrl: imageUrl});
    }

    try {
      const response = await products.addProduct({data:{
        model: model,
        category: category,
        color: color,
        price: parseInt(price),
        sizes: sizes,
        newRelease: newRealease,
        gender: gender,
        images: images
      },auth:true});
      toast.dismiss(toastId);

      toast.success("Product has been created", { duration: 2000 });
      router.push(`/products/${response.data._id}`);
    } catch (error) {
      toast.dismiss(toastId);
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  return (
    <div className={styles.product}>
      <TopBar
        page={"Product Details"}
        pageList={["Home", "All Products", "Add New Product"]}
      />
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.inputSection}>
            <div className={styles.inputTitle}>Product Name</div>
            <Input
              type={"text"}
              name={"model"}
              placeholder={"Type name here"}
              value={value.model}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputSection}>
            <div className={styles.inputTitle}>Category</div>
            <select
              name={"category"}
              className={styles.inputSelect}
              onChange={handleChange}
              value={value.category}
            >
              <option disabled value="default">
                Category
              </option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputSectionFlex}>
            <div className={styles.inputSectionFlexContainer}>
              <div className={styles.inputTitle}>Color</div>
              <select
                name={"color"}
                className={styles.inputSelect}
                value={value.color}
                onChange={handleChange}
              >
                <option disabled value="default">
                  Color
                </option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="black">black</option>
                <option value="jet">jet</option>
                <option value="orange">orange</option>
                <option value="gray">gray</option>
                <option value="metal">metal</option>
                <option value="brown">brown</option>
                <option value="wood">wood</option>
              </select>
            </div>
            <div className={styles.inputSectionFlexContainer}>
              <div className={styles.inputTitle}>Price</div>
              <Input
                type={"number"}
                name={"price"}
                placeholder={"1000"}
                value={value.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputSectionFlex}>
            <div className={styles.inputSectionFlexContainer}>
              <div className={styles.inputTitle}>Gender</div>
              <select
                name={"gender"}
                className={styles.inputSelect}
                value={value.gender}
                onChange={handleChange}
              >
                <option disabled value="default">
                  Gender
                </option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>
            <div className={styles.inputSectionFlexContainer}>
              <div className={styles.inputTitle}>Stock</div>
              <Input
                type={"number"}
                name={"stock"}
                placeholder={123}
                value={stock}
                disabled={true}
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <div className={styles.inputTitle}>New Release</div>
            <select
              name={"newRelease"}
              className={styles.inputSelect}
              id="newRelease"
            >
              <option disabled value="default">
                newRelease
              </option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className={styles.sizesInput}>
            <div className={styles.titleContainer}>
              <div className={styles.inputTitle}>Sizes</div>
              <div className={styles.sizeActions}>
                <svg
                  onClick={addSize}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <svg
                  onClick={removeSize}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
            </div>
            {sizes.map((ele, i) => (
              <div key={i} className={styles.sizesInputContainer}>
                <select
                  name={"size"}
                  className={styles.inputSelect}
                  value={ele.size}
                  onChange={(e) => {
                    let list = [...sizes];
                    list[i].size = parseInt(e.target.value);
                    setSizes(list);
                  }}
                >
                  <option disabled value="default">
                    Size
                  </option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                <Input
                  type={"number"}
                  placeholder={123}
                  value={ele.quantity}
                  onChange={(e) => {
                    let list = [...sizes];
                    list[i].quantity = parseInt(e.target.value);

                    const stock = list.reduce((total, item) => {
                      return total + parseInt(item.quantity);
                    }, 0);
                    setStock(stock);
                    setSizes(list);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.productImage}>
            {files.length > 0 ? (
              <Image src={URL.createObjectURL(files[0])} alt="product" fill />
            ) : (
              <p className={styles.withoutImage}>Upload Photos</p>
            )}
          </div>
          <div className={styles.uploadImageContainer}>
            <div className={styles.inputTitle}>Product Gallery</div>
            <span className={styles.uploadBox}>
              <div className={styles.uploadBoxContent}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="64"
                  viewBox="0 0 65 64"
                  fill="none"
                >
                  <path
                    d="M54.5 10.5H10.5C9.57174 10.5 8.6815 10.8687 8.02513 11.5251C7.36875 12.1815 7 13.0717 7 14V50C7 50.9283 7.36875 51.8185 8.02513 52.4749C8.6815 53.1312 9.57174 53.5 10.5 53.5H54.5C55.4283 53.5 56.3185 53.1312 56.9749 52.4749C57.6312 51.8185 58 50.9283 58 50V14C58 13.0717 57.6312 12.1815 56.9749 11.5251C56.3185 10.8687 55.4283 10.5 54.5 10.5ZM10.5 13.5H54.5C54.6326 13.5 54.7598 13.5527 54.8536 13.6464C54.9473 13.7402 55 13.8674 55 14V42.375L46.975 34.35C46.3154 33.6996 45.4263 33.335 44.5 33.335C43.5737 33.335 42.6846 33.6996 42.025 34.35L36.85 39.525C36.8055 39.5735 36.7514 39.6122 36.6912 39.6387C36.6309 39.6652 36.5658 39.6789 36.5 39.6789C36.4342 39.6789 36.3691 39.6652 36.3088 39.6387C36.2486 39.6122 36.1945 39.5735 36.15 39.525L24.975 28.35C24.3154 27.6996 23.4263 27.335 22.5 27.335C21.5737 27.335 20.6846 27.6996 20.025 28.35L10 38.375V14C10 13.8674 10.0527 13.7402 10.1464 13.6464C10.2402 13.5527 10.3674 13.5 10.5 13.5ZM54.5 50.5H10.5C10.3674 50.5 10.2402 50.4473 10.1464 50.3536C10.0527 50.2598 10 50.1326 10 50V42.625L22.15 30.475C22.1945 30.4265 22.2486 30.3878 22.3088 30.3613C22.3691 30.3348 22.4342 30.3211 22.5 30.3211C22.5658 30.3211 22.6309 30.3348 22.6912 30.3613C22.7514 30.3878 22.8055 30.4265 22.85 30.475L34.025 41.65C34.6846 42.3004 35.5737 42.665 36.5 42.665C37.4263 42.665 38.3154 42.3004 38.975 41.65L44.15 36.475C44.1945 36.4265 44.2486 36.3878 44.3088 36.3613C44.3691 36.3348 44.4342 36.3211 44.5 36.3211C44.5658 36.3211 44.6309 36.3348 44.6912 36.3613C44.7514 36.3878 44.8055 36.4265 44.85 36.475L55 46.625V50C55 50.1326 54.9473 50.2598 54.8536 50.3536C54.7598 50.4473 54.6326 50.5 54.5 50.5ZM37.725 26.775C37.4922 26.5422 37.3081 26.2653 37.1836 25.9606C37.0591 25.6558 36.9967 25.3292 37 25C37 24.337 37.2634 23.7011 37.7322 23.2322C38.2011 22.7634 38.837 22.5 39.5 22.5C40.163 22.5 40.7989 22.7634 41.2678 23.2322C41.7366 23.7011 42 24.337 42 25C42 25.663 41.7366 26.2989 41.2678 26.7678C40.7989 27.2366 40.163 27.5 39.5 27.5C39.1708 27.5033 38.8442 27.4409 38.5394 27.3164C38.2347 27.1919 37.9578 27.0078 37.725 26.775Z"
                    fill="#4A69E2"
                  />
                </svg>
                <div className={styles.text}>
                  <p>Drop your imager here, or browse</p>
                  <p>Jpeg, png are allowed</p>
                </div>
              </div>
              <input
                className={styles.fileInput}
                type="file"
                id="uploadFile"
                onChange={(e) => handleFileChange(e)}
              />
            </span>
          </div>
          <div className={styles.uploads}>
            {files.map((image, i) => (
              <div key={i} className={styles.imageUploads}>
                <Image
                  src={URL.createObjectURL(image)}
                  alt="product"
                  width={64}
                  height={64}
                />
                <div className={styles.file}>
                  <p className={styles.fileName}>{`${value.model}${i + 1}.png`}</p>
                  <div className={styles.fileProgress}></div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M22.7836 11.6582L22.7838 11.6579C22.9537 11.4496 23.0349 11.1827 23.0096 10.915C22.9844 10.6474 22.8549 10.4003 22.649 10.2274C22.4431 10.0545 22.1774 9.9695 21.9094 9.99085C21.6414 10.0122 21.3925 10.1382 21.2166 10.3415L21.2164 10.3418L13.5719 19.4405L10.7597 16.316C10.7596 16.3159 10.7595 16.3158 10.7595 16.3158C10.6706 16.2124 10.5621 16.1278 10.4401 16.0669C10.318 16.0061 10.185 15.9702 10.0489 15.9614C9.9128 15.9527 9.77631 15.9712 9.64746 16.016C9.51861 16.0607 9.40001 16.1308 9.29862 16.222C9.19723 16.3132 9.1151 16.4238 9.05706 16.5473C8.99902 16.6707 8.96624 16.8045 8.96065 16.9408C8.95505 17.0771 8.97676 17.2131 9.02449 17.3409C9.07218 17.4686 9.14491 17.5854 9.23839 17.6846C9.23845 17.6847 9.23851 17.6848 9.23857 17.6848L12.8382 21.6844C12.9341 21.7911 13.0514 21.8764 13.1824 21.9348C13.3135 21.9932 13.4553 22.0234 13.5987 22.0234L13.6156 22.0234L13.616 22.0234C13.7626 22.0211 13.9071 21.9873 14.0395 21.9243C14.1719 21.8613 14.2893 21.7705 14.3836 21.6582L22.7836 11.6582ZM3.02344 16C3.02344 8.84482 8.84482 3.02344 16 3.02344C23.1552 3.02344 28.9766 8.84482 28.9766 16C28.9766 23.1552 23.1552 28.9766 16 28.9766C8.84482 28.9766 3.02344 23.1552 3.02344 16Z"
                    fill="#4A69E2"
                    stroke="#4A69E2"
                    strokeWidth="0.046875"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className={styles.actionButtons}>
            <button
              className={`${styles.button} ${styles.update}`}
              onClick={handleSubmit}
            >
              Save
            </button>
            <button className={`${styles.button} ${styles.cancel}`}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
