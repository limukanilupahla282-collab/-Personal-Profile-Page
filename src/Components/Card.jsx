function ProfileCard() {
  return (
    <section className="bg-white w-11/12 max-w-xl mx-auto my-10 p-8 rounded-xl shadow-lg">

      <img
        src="/Dell.jpeg"
        alt="Profile of Dellrayne"
        className="w-36 h-36 object-cover rounded-full mx-auto mb-6"
      />

      <h2 className="text-3xl font-bold text-cyan-900 text-center">
        Dellrayne Limukani
      </h2>

      <p className="text-gray-600 text-center mt-4 leading-relaxed">
        I am a software development learner passionate about
        building useful websites and applications.
      </p>

      <h3 className="text-xl font-semibold text-cyan-700 mt-6 mb-3">
        My Course and Skills
      </h3>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Software Development</li>
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>React and JSX</li>
        <li>TypeScript</li>
      </ul>

    </section>
  );
}

export default ProfileCard;