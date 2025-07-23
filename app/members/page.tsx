import PageLayout from "@/components/page-layout"
import Image from "next/image"

export default function MembersPage() {
  return (
    <PageLayout>
      <div className="min-h-screen p-8 md:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Seito Nakagane */}
            <div className="flex flex-col items-center">
              <Image
                src="/306-seito-logo.svg"
                alt="Seito Logo"
                width={300}
                height={300}
                className="mb-8"
                style={{ filter: 'blur(3px)' }}
              />
              <Image
                src="/306-seito-name.svg"
                alt="Seito Name"
                width={300}
                height={100}
                className="mb-4"
                style={{ filter: 'blur(0.5px)' }}
              />
              <p className="text-xl">Seito Nakagane</p>
            </div>

            {/* Sato Eisuke */}
            <div className="flex flex-col items-center">
              <Image
                src="/306-eisuke-logo.svg"
                alt="Eisuke Logo"
                width={300}
                height={300}
                className="mb-8"
                style={{ filter: 'blur(3px)' }}
              />
              <Image
                src="/306-eisuke-name.svg"
                alt="Eisuke Name"
                width={300}
                height={100}
                className="mb-4"
                style={{ filter: 'blur(0.5px)' }}
              />
              <p className="text-xl">Eisuke Sato</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}