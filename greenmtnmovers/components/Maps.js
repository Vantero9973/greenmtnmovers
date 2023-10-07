export default function Maps() {
  return (
    <div className="mapsContainer">
      <div className="mapsDiv">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=denver&t=&z=9&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="maps-iframe"
        />
      </div>
    </div>
  );
}
