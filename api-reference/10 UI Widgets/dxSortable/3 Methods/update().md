---
id: dxSortable.update()
---
---
##### shortDescription
Updates **Sortable**'s dimensions. Call this method after items are added or their dimensions are changed during dragging.
 
---
##### Angular

    this.items = newItems;
    this.needUpdate = true;
    ...
    ngAfterViewChecked() {
        if (this.needUpdate) {
            this.needUpdate = false;
            this.sortable.instance.update();
        }
    }

##### Vue

    watch: {
        items: function (val, oldVal) {
            this.$nextTick(() => {
                this.$refs.sortable.instance.update();
            }); 
        },
    },

##### React

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.items !== prevState.items) {
            setTimeout(() => {
                this.sortableRef.current.instance.update();
            });
        }
    }
  
---

#####See Also#####
#include common-link-callmethods