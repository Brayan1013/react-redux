/** @format */

export const uploadFile = async (file) => {
  const urlCloudinary = "https://api.cloudinary.com/v1_1/dplng4esp/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-app");
  formData.append("file", file);

  try {
    const response = await fetch(urlCloudinary, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const { secure_url } = await response.json();
      return secure_url;
    } else {
      throw new Error("Something bad happend =(");
    }
  } catch (error) {
    throw new Error(error);
  }
};
