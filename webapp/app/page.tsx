import WeekType from '@/components/WeekType';
import EventIcon from '@mui/icons-material/Event';
import LinkIcon from '@mui/icons-material/Link';
import dynamic from 'next/dynamic';

const Video = dynamic(() => import('@/components/Video'), { ssr: false });

export default function Home() {
  return (
    <div className="flex justify-center p-5">
      <div className="flex max-w-xl flex-col gap-10">
        <div>
          <WeekType />
        </div>

        <div>
          <Video />
        </div>

        <div className="flex flex-col justify-between gap-5">
          <h2 className="text-2xl">Dance Class Schedule</h2>
          <ul>
            <li>
              Classes on 1 in <span className="text-red-500">odd</span> calendar weeks.
            </li>
            <li>
              Classes on 2 in <span className="text-red-500">even</span> calendar weeks.
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              Friday 19:00 - Level 2:{' '}
              <div className="flex justify-start gap-5">
                <a
                  className=" text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmVlcnBjYzI0dDlsN3JkYzRlbzhqZmltM2ZfMjAyMzEyMjJUMTgwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 1
                </a>
                <a
                  className=" text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzA2dWY3cWl1c2FrOGo2cGo4OXU4OWxoYW9fMjAyMzEyMTVUMTgwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 2
                </a>
              </div>
            </li>
            <li>
              Friday 20:00 - Level 1:{' '}
              <div className="flex justify-start gap-5">
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDU0dXFlcjExaG1tNXNhYmZrNGs2Y2VyZzZfMjAyMzEyMjJUMTkwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 1
                </a>
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NW10djV1bjd0M3UzY3VhcmppdmN2cDNqZHBfMjAyMzEyMTVUMTkwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 2
                </a>
              </div>
            </li>
            <li>
              Friday 21:00 - Level 3/4:{' '}
              <div className="flex justify-start gap-5">
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=aW8zcXJuanQ2aWxjOWdsMm1vZWR0Nmx1bmxfMjAyMzEyMjJUMjAwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 1
                </a>

                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXNiNjlnZmJxYXE5YTlpbjZvaTRnaWcxc2FfMjAyMzEyMTVUMjAwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 2
                </a>
              </div>
            </li>
            <li>
              Sunday 17:00 - Level 2:{' '}
              <div className="flex justify-start gap-5">
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWYzZHJucDl2NGhtaGY4cGIyZWhjZmQxZXRfMjAyMzEyMTBUMTYwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 1
                </a>
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmljMGUxNDk0bThoM2FucjlxYm50Z2Y0MGdfMjAyMzEyMTdUMTYwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 2
                </a>
              </div>
            </li>
            <li>
              Sunday 18:00 - Level 3,4:{' '}
              <div className="flex justify-start gap-5">
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2ZudmZzbjdvOWplNDFtbXZ1anNvbTI2NWtfMjAyMzEyMTBUMTcwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 1
                </a>
                <a
                  className="text-blue-500"
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Y2JmdDc1djBxcjNoaHRubGFucDZ1ZHBjZmVfMjAyMzEyMTdUMTcwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
                >
                  <EventIcon /> Add on 2
                </a>
              </div>
            </li>
          </ul>
          <div>
            (The <span className="text-blue-500">links</span> only work on desktop)
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-xl">Bürgerzentrum Reservation Plan</h3>
          <p>
            For those interested in conducting private training sessions, Astoria offers the option to reserve a
            designated area of the hall.
          </p>
          <p className="mt-5">
            <a
              className="text-blue-500"
              href="https://docs.google.com/spreadsheets/d/17diOJiU3ZKdAkBHcWSAA1d_HPpv582AJgOy36N-yFrg/edit?usp=sharing"
            >
              <LinkIcon /> View and Reserve Hall Space
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
