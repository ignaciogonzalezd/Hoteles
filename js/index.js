/* Scrip para que funcionen los tooltip, popover y carousel */

        $(function () {
            $("[data-toggle='tooltip']").tooltip();
            $("[data-toggle='popover']").popover();
            $('.carousel').carousel({
                interval: 2000
            });

            $('#contactoBtn').on('show.bs.modal', function (e) {
                console.log('el modal contacto se está mostrando');

                $('#contactoBtn').removeClass('btn-otline-success');
                $('#contactoBtn').addClass('btn-primary');
                $('#contactoBtn').prop('disabled', true);
            });
            $('#contactoBtn').on('shown.bs.modal', function (e) {
                console.log('el modal contacto se mostró');
            });
            $('#contactoBtn').on('hide.bs.modal', function (e) {
                console.log('el modal contacto se oculta');
            });
            $('#contactoBtn').on('hidden.bs.modal', function (e) {
                console.log('el modal contacto se ocultó');
                $('#contactoBtn').prop('disabled', false);
            });
        });