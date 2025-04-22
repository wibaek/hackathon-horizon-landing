import axios from "axios";

export const submitEmail = async (email: string) => {
  try {
    const response = await axios.post(
      `https://qmoo5rzm0h.execute-api.ap-northeast-2.amazonaws.com/prod/subscribe`,
      { email }
    );
    return response.data;
  } catch (error) {
    console.error("이메일 제출 중 오류가 발생했습니다:", error);
    throw error;
  }
};
