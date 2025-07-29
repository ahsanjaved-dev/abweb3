"use client"

import { useState, useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { addDays, format, isToday, isTomorrow } from "date-fns"
import { BookingStepper } from "@/components/booking/BookingStepper"
import { useBookingStore } from "@/app/store/booking-store"
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Sun,
  Moon,
  Coffee,
} from "lucide-react"
import {
  FadeInDiv,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  HoverButton,
  HoverCard,
  AnimatedIcon,
} from "@/components/booking/framer"

export default function SchedulePage() {
  const router = useRouter()
  const { setArrivalWindow } = useBookingStore()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Generate next 14 days for better selection (today created inside useMemo)
  const dates = useMemo(() => {
    const today = new Date()
    return Array.from({ length: 14 }, (_, i) => addDays(today, i))
  }, [])

  const timeSlots = useMemo(
    () => [
      {
        time: "9:00am - 12:00pm",
        icon: Sun,
        period: "Morning",
        description: "Start your day fresh",
      },
      {
        time: "12:30pm - 3:30pm",
        icon: Coffee,
        period: "Afternoon",
        description: "Midday convenience",
      },
      {
        time: "4:00pm - 7:00pm",
        icon: Moon,
        period: "Evening",
        description: "After work hours",
      },
    ],
    []
  )

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null) // Reset time when date changes
  }, [])

  const handleTimeSelect = useCallback((time: string) => {
    setSelectedTime(time)
  }, [])

  const handleSubmit = useCallback(() => {
    if (selectedDate && selectedTime) {
      setArrivalWindow({
        date: selectedDate,
        time: selectedTime,
      })
      router.push("/book/confirmation")
    }
  }, [selectedDate, selectedTime, setArrivalWindow, router])

  const getDateLabel = useCallback((date: Date) => {
    if (isToday(date)) return "Today"
    if (isTomorrow(date)) return "Tomorrow"
    return format(date, "EEE")
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <SlideInLeft>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group"
          >
            <AnimatedIcon>
              <ArrowLeft className="mr-2 h-5 w-5" />
            </AnimatedIcon>
            <span>Back to Contact</span>
          </button>
        </SlideInLeft>

        {/* Header Section */}
        <FadeInUp delay={0.1} className="text-center mb-8">
          <ScaleIn
            delay={0.2}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Appointment</span>
          </ScaleIn>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AB Carpet Cleaning
            </span>
          </h1>

          <FadeInDiv delay={0.3} className="text-lg text-slate-600 dark:text-slate-400">
            Choose your preferred date and time for our arrival
          </FadeInDiv>
        </FadeInUp>

        {/* Booking Stepper */}
        <BookingStepper />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Scheduling Interface */}
          <div className="lg:col-span-2 space-y-8">
            {/* Date Selection */}
            <FadeInDiv
              delay={0.4}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Select Date
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Choose your preferred service date
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 min-w-max">
                  {dates.map((date, index) => {
                    const isSelected =
                      selectedDate?.getDate() === date.getDate() &&
                      selectedDate?.getMonth() === date.getMonth()

                    return (
                      <ScaleIn key={date.toString()} delay={0.5 + index * 0.05}>
                        <HoverCard
                          onClick={() => handleDateSelect(date)}
                          className={`flex-shrink-0 w-28 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 shadow-lg shadow-blue-500/25"
                              : "border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-600"
                          }`}
                        >
                          <div className="text-center">
                            <div
                              className={`text-sm font-medium mb-1 ${
                                isSelected
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-slate-600 dark:text-slate-400"
                              }`}
                            >
                              {getDateLabel(date)}
                            </div>
                            <div
                              className={`text-lg font-bold ${
                                isSelected
                                  ? "text-blue-700 dark:text-blue-300"
                                  : "text-slate-900 dark:text-slate-100"
                              }`}
                            >
                              {format(date, "MMM d")}
                            </div>
                            <div
                              className={`text-xs ${
                                isSelected
                                  ? "text-blue-500 dark:text-blue-400"
                                  : "text-slate-500 dark:text-slate-400"
                              }`}
                            >
                              {format(date, "yyyy")}
                            </div>
                          </div>
                        </HoverCard>
                      </ScaleIn>
                    )
                  })}
                </div>
              </div>
            </FadeInDiv>

            {/* Time Selection */}
            {selectedDate && (
              <FadeInDiv
                delay={0.6}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      Select Time
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      Available time slots for{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {format(selectedDate, "EEEE, MMMM d")}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {timeSlots.map((slot, index) => {
                    const isSelected = selectedTime === slot.time
                    const Icon = slot.icon

                    return (
                      <ScaleIn key={index} delay={0.7 + index * 0.1}>
                        <HoverCard
                          onClick={() => handleTimeSelect(slot.time)}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 shadow-lg shadow-purple-500/25"
                              : "border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 hover:border-purple-300 dark:hover:border-purple-600"
                          }`}
                        >
                          <div className="text-center">
                            <div
                              className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                                isSelected
                                  ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div
                              className={`font-semibold mb-1 ${
                                isSelected
                                  ? "text-purple-700 dark:text-purple-300"
                                  : "text-slate-900 dark:text-slate-100"
                              }`}
                            >
                              {slot.period}
                            </div>
                            <div
                              className={`text-sm font-medium mb-2 ${
                                isSelected
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {slot.time}
                            </div>
                            <div
                              className={`text-xs ${
                                isSelected
                                  ? "text-purple-500 dark:text-purple-400"
                                  : "text-slate-500 dark:text-slate-400"
                              }`}
                            >
                              {slot.description}
                            </div>
                          </div>
                        </HoverCard>
                      </ScaleIn>
                    )
                  })}
                </div>

                {selectedTime && (
                  <FadeInDiv
                    delay={0.9}
                    className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">
                          Perfect! We&apos;ll arrive during your selected window:
                        </p>
                        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                          {format(selectedDate, "EEEE, MMMM d")} at {selectedTime}
                        </p>
                      </div>
                    </div>
                  </FadeInDiv>
                )}

                {/* Continue Button */}
                <FadeInDiv delay={1.0} className="mt-8">
                  <HoverButton
                    onClick={handleSubmit}
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200 ${
                      selectedDate && selectedTime
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <span>CONTINUE TO CONFIRMATION</span>
                    <ArrowRight className="w-5 h-5" />
                  </HoverButton>
                </FadeInDiv>
              </FadeInDiv>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SlideInRight delay={0.5}>
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-blue-50/70 to-indigo-100/70 dark:from-blue-900/20 dark:to-indigo-800/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        Appointment Details
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Your selection</p>
                    </div>
                  </div>

                  {selectedDate ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                          Selected Date
                        </div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          {format(selectedDate, "EEEE, MMMM d, yyyy")}
                        </div>
                      </div>

                      {selectedTime && (
                        <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            Time Window
                          </div>
                          <div className="font-semibold text-slate-900 dark:text-slate-100">
                            {selectedTime}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
                      <p className="text-slate-500 dark:text-slate-400">
                        Select a date to see available times
                      </p>
                    </div>
                  )}

                  {/* Service Info */}
                  <HoverCard className="mt-6 p-4 bg-white/30 dark:bg-slate-800/30 rounded-xl">
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <CheckCircle className="w-4 h-4 inline mr-2 text-emerald-500" />
                      Professional team arrival
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <CheckCircle className="w-4 h-4 inline mr-2 text-emerald-500" />
                      All equipment included
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 inline mr-2 text-emerald-500" />
                      Satisfaction guaranteed
                    </div>
                  </HoverCard>

                  {/* Contact Note */}
                  <div className="mt-4 p-4 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200/30 dark:border-emerald-700/30">
                    <div className="text-sm text-emerald-700 dark:text-emerald-400">
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      We&apos;ll call 30 minutes before arrival
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>

        {/* Footer */}
        <FadeInDiv delay={1.2} className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm bg-white/50 dark:bg-slate-800/50 px-6 py-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">Web Nurture</span>
            </span>
          </div>
        </FadeInDiv>
      </div>
    </div>
  )
}
