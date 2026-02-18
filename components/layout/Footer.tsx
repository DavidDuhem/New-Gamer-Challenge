export default function Footer() {
  return (
    <>
      <div className="w-full h-px bg-base-200" />
      <footer className="footer sm:footer-horizontal footer-center bg-base-100 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            SYNLIKE Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}
