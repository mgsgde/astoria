import WeekType from '@/components/WeekType';
import EventIcon from '@mui/icons-material/Event';
import LinkIcon from '@mui/icons-material/Link';
import dynamic from 'next/dynamic';

const Video = dynamic(() => import('@/components/Video'), { ssr: false });

export default function Home() {
  return (
    <div className="my-5 flex justify-center px-5">
      <div className="flex max-w-xl flex-col justify-around gap-10">
        <div>
          <WeekType />
        </div>
        <div>
          <Video />
        </div>

        <div>
          <h2 className="mb-4 text-2xl">Dance Class Schedule</h2>
          <p className="mb-2">(Alternating)</p>
          <ul className="space-y-2">
            <li>Course On 1 in odd calendar weeks</li>
            <li>Course On 2 in even calendar weeks</li>
          </ul>

          <h3 className="my-4 mb-2 text-xl">Course On 1:</h3>
          <ul className="space-y-2">
            <li>
              Friday 19:00 - Level 2:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmVlcnBjYzI0dDlsN3JkYzRlbzhqZmltM2ZfMjAyMzEyMjJUMTgwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Friday 20:00 - Level 1:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDU0dXFlcjExaG1tNXNhYmZrNGs2Y2VyZzZfMjAyMzEyMjJUMTkwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Friday 21:00 - Level 3/4:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=aW8zcXJuanQ2aWxjOWdsMm1vZWR0Nmx1bmxfMjAyMzEyMjJUMjAwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Sunday 17:00 - Level 2:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWYzZHJucDl2NGhtaGY4cGIyZWhjZmQxZXRfMjAyMzEyMTBUMTYwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Sunday 18:00 - Level 3,4:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2ZudmZzbjdvOWplNDFtbXZ1anNvbTI2NWtfMjAyMzEyMTBUMTcwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
          </ul>

          <h3 className="my-4 mb-2 text-xl">Course On 2:</h3>
          <ul className="space-y-2">
            <li>
              Friday 19:00 - Level 2:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzA2dWY3cWl1c2FrOGo2cGo4OXU4OWxoYW9fMjAyMzEyMTVUMTgwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Friday 20:00 - Level 1:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NW10djV1bjd0M3UzY3VhcmppdmN2cDNqZHBfMjAyMzEyMTVUMTkwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Friday 21:00 - Level 3/4:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXNiNjlnZmJxYXE5YTlpbjZvaTRnaWcxc2FfMjAyMzEyMTVUMjAwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Sunday 17:00 - Level 2:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmljMGUxNDk0bThoM2FucjlxYm50Z2Y0MGdfMjAyMzEyMTdUMTYwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
            <li>
              Sunday 18:00 - Level 3,4:{' '}
              <a
                className="text-blue-500"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Y2JmdDc1djBxcjNoaHRubGFucDZ1ZHBjZmVfMjAyMzEyMTdUMTcwMDAwWiBtZ3NnZGVAbQ&tmsrc=mgsgde%40gmail.com&scp=ALL"
              >
                <EventIcon /> Add
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="my-4 mb-2 text-xl">Citizen Center Reservation Plan</h3>
          <p>
            For those interested in conducting private training sessions, the Citizen Center offers the option to
            reserve a designated area of the hall. This provides a dedicated space for focused and personalized
            training.
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
