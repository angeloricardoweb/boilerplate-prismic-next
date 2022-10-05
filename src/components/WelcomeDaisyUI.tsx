import { useGlobal } from '../context/GlobalContextProvider';

export function WelcomeDaisyUI() {
  const {contextWorking} = useGlobal();
  console.log(contextWorking);

  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button">DaisyUI is Working?</label>


      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">DaisyUI is Working!!!!</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">Okay then!</label>
          </div>
        </div>
      </div>

    </div>
  )
}
