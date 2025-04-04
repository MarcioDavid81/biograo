import Link from "next/link";


const Welcome = ({title, description, txt_btn}: any) => {
    return (
        <section className="section bg-white">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary mb-6">{title}</h2>
            <p className="text-lg mb-8">
              {description}
            </p>
            <Link href="/about" className="btn bg-lime-500 text-white">
              {txt_btn}
            </Link>
          </div>
        </div>
      </section>
    );
}

export default Welcome