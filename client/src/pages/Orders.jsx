import customFetch from "../utilits/customFetch";
import { useLoaderData, Link } from "react-router-dom";
import { OrderItem } from "../components";

import { forMatDate, sortBookingsByCheckInDate } from "../utilits/helper";

export const loader = async () => {
  try {
    const res = await customFetch.get("/booking/orders");
    return res.data;
  } catch (error) {
    throw {
      status: error.response.status,
      message: error.response.data.msg,
    };
  }
};

const Orders = () => {
  const { data: orders } = useLoaderData();

  const checkInDates = orders.map((order) => order.checkIn);

  const setedCheckInDates = [...new Set(checkInDates)];

  if (orders.length === 0)
    return (
      <div className="text-center mt-5">
        <Link className="text-2xl hover:text-primary" to={"/"}>
          暫時無任何訂房產生。
        </Link>
      </div>
    );

  return (
    <section className="flex flex-col gap-4 max-w-6xl mx-auto">
      {setedCheckInDates.length > 0 &&
        setedCheckInDates.map((date) => (
          <div key={date}>
            <div className="text-2xl mb-2">{forMatDate(date)}</div>
            {sortBookingsByCheckInDate(orders)
              .filter((order) => order.checkIn === date)
              .map((order) => (
                <OrderItem key={order._id} order={order} />
              ))}
          </div>
        ))}
    </section>
  );
};
export default Orders;
