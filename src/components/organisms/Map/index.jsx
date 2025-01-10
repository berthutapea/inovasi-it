import React from 'react';

function Map() {
  return (
    <div className="grid gap-6 mt-10">
      <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-6">
        <div className="box border dark:border-gray-700 shadow-lg rounded-lg overflow-hidden">
          <div className="box-body p-0">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4879.527440752902!2d107.37766074174469!3d-6.318219627431961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69772a3359107b%3A0x1f10a6889825470!2sSMK%20TEKNOLOGI%20KARAWANG!5e1!3m2!1sen!2sid!4v1736536960120!5m2!1sen!2sid"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
