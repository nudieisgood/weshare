import { Link, useLoaderData } from "react-router-dom";

import { MdCreditCard } from "react-icons/md";
import {
  calDaysToCheckIn,
  forMatDate,
  sortBookingsByCheckInDate,
} from "../utilits/helper";

import customFetch from "../utilits/customFetch";
import { BookingInfo } from "../components";

export const loader = async () => {
  try {
    const res = await customFetch.get("/booking");

    return res.data.data;
  } catch (error) {
    throw {
      status: error.response.status,
      message: error.response.data.msg,
    };
  }
};

const Bookings = () => {
  const bookingsData = useLoaderData();

  const checkInDates = bookingsData.map((booking) => booking.checkIn);

  const setedCheckInDates = [...new Set(checkInDates)];

  if (bookingsData.length === 0)
    return (
      <section className="text-center mt-5">
        <Link className="text-2xl hover:text-primary" to={"/"}>
          沒有任何訂房，立刻規劃您的旅程。
        </Link>
      </section>
    );

  return (
    <section className="flex flex-col gap-6 max-w-6xl mx-auto">
      {setedCheckInDates.length > 0 &&
        setedCheckInDates.map((date) => (
          <div key={date}>
            <div className="text-2xl mb-2">{forMatDate(date)}</div>

            {bookingsData.length > 0 && (
              <div className="flex flex-col gap-2">
                {sortBookingsByCheckInDate(bookingsData)
                  .filter((booking) => booking.checkIn === date)
                  .map((booking) => {
                    const { bookingStatus } = booking;
                    const shortTitle =
                      booking.place.title.length > 28
                        ? booking.place.title.slice(0, 28) + "  ..."
                        : booking.place.title;

                    let bookingStatusInCh;
                    if (bookingStatus === "pending")
                      bookingStatusInCh = "等待中";
                    if (bookingStatus === "confirm")
                      bookingStatusInCh = "已確認";
                    if (bookingStatus === "cancel")
                      bookingStatusInCh = "已取消";
                    if (bookingStatus === "failed")
                      bookingStatusInCh = "未完成";
                    if (bookingStatus === "completed")
                      bookingStatusInCh = "已完成";
                    return (
                      <Link
                        to={booking._id}
                        key={booking._id}
                        className="flex lg:gap-3 bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="w-32 sm:w-40 flex shrink-0 md:w-64">
                          <img
                            src={booking.place.photos[0]}
                            className="object-cover aspect-video"
                          />
                        </div>
                        <div className="p-2 flex flex-col gap-2 grow">
                          <div>
                            <div className="text-sm sm:text-lg md:text-xl">
                              <p className="hidden sm:block">
                                {booking.place.title}
                              </p>
                              <p className="sm:hidden">{shortTitle}</p>
                              <p className="text-gray-500 ">
                                {calDaysToCheckIn(
                                  booking.checkIn,
                                  booking.place.checkInTime
                                )}
                              </p>
                            </div>
                          </div>

                          <BookingInfo
                            numOfNights={booking.numOfNights}
                            checkIn={booking.checkIn}
                            checkOut={booking.checkOut}
                            numOfGuest={booking.numOfGuest}
                          />
                          <div className="grow items-end flex justify-between text-md sm:text-xl md:text-2xl">
                            <div className="flex gap-1 items-center">
                              <MdCreditCard /> {booking.price} TWD
                            </div>
                            <div className="grid justify-items-end gap-1">
                              {bookingStatus === "pending" && (
                                <p className="text-gray-500 text-xs md:text-sm">
                                  等待房源確認
                                </p>
                              )}
                              {bookingStatus === "completed" &&
                                booking.review && (
                                  <div className="text-gray-500 text-xs md:text-sm text-end">
                                    <Link
                                      className="hover:underline"
                                      to={`/place/${booking.place._id}`}
                                    >
                                      再安排一次
                                    </Link>
                                  </div>
                                )}
                              {bookingStatus === "completed" &&
                                !booking.review && (
                                  <div className="text-gray-500 text-xs md:text-sm text-end">
                                    <p>滿意此次住宿嗎？</p>
                                    <p>請完成對住宿評價</p>
                                  </div>
                                )}

                              <p className="text-xs md:text-sm bg-gray-400 py-1 rounded-2xl px-2 py-1">
                                {bookingStatusInCh}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>
        ))}
    </section>
  );
};
export default Bookings;
