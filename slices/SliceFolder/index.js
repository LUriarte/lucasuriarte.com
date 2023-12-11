/**
 * @typedef {import("@prismicio/client").Content.SliceFolderSlice} SliceFolderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliceFolderSlice>} SliceFolderProps
 * @param {SliceFolderProps}
 */
const SliceFolder = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slice_folder (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SliceFolder;
